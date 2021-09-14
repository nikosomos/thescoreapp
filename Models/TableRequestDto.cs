using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Reflection.Metadata.Ecma335;
using Microsoft.EntityFrameworkCore;

namespace thescoreapp.Models
{
    public class TableRequestDto
    {
        public IEnumerable<SortDto> Sort { get; set; }
        public IEnumerable<FilterDto> Filter { get; set; }

        public IQueryable<T> ApplyRequest<T>(IQueryable<T> queryable)
        {
            var properties = typeof(T).GetProperties().ToList();
            foreach (FilterDto filter in Filter)
            {
                var objectProperty = properties.SingleOrDefault(p => p.Name.Equals(filter.FieldName, StringComparison.InvariantCultureIgnoreCase));

                if (objectProperty == null)
                    continue;

                queryable = queryable.Where(filter.ToFilterString("@0"), filter.Value);
            }

            var sortList = new List<string>();
            foreach (SortDto sort in Sort.OrderBy(x => x.Priority))
            {
                var objectProperty = properties.SingleOrDefault(p => p.Name.Equals(sort.FieldName, StringComparison.InvariantCultureIgnoreCase));

                if (objectProperty == null)
                    continue;

                // TODO: Not ideal here. Trying to keep this class agnostic to the model.
                // Need to find some way to apply the sort on the modified column
                if (objectProperty.Name.Equals("Longest"))
                {
                    sort.FieldName = $"Convert.toDouble({sort.FieldName}.Replace(\"T\", \"\"))";

                }
                sortList.Add(sort.ToString());
            }

            if (!sortList.Any()) return queryable;

            return queryable.OrderBy(string.Join(", ", sortList));
        }
    }

    public class PaginatedTableRequestDto : TableRequestDto
    {
        public int Page { get; set; }
        public int RowsPerPage { get; set; }

        public new TableResponseDto<T> ApplyRequest<T>(IQueryable<T> queryable)
        {
            queryable = base.ApplyRequest<T>(queryable);
            var totalCount = queryable.Count();
            queryable = queryable.Skip(Page * RowsPerPage).Take(RowsPerPage);

            return new TableResponseDto<T>
            {
                Data = queryable.ToList(),
                TotalCount = totalCount,
            };
        }
    }

    public class SortDto
    {
        public string FieldName { get; set; }
        public string SortDirection { get; set; }
        public int Priority { get; set; }

        public override string ToString()
        {
            return SortDirection switch
            {
                "asc" => FieldName,
                "desc" => $"{FieldName} desc",
                _ => "",
            };
        }
    }

    public class FilterDto
    {
        public string FieldName { get; set; }
        public string Operation { get; set; }
        public string Value { get; set; }

        public string ToFilterString(string valueParameter)
        {
            return Operation switch
            {
                "contains" => $"{FieldName}.toLower().Contains({valueParameter}.toLower())",
                _ => "",
            };
        }
    }
}