using System.Collections.Generic;

namespace thescoreapp.Models
{
    public class TableResponseDto<T>
    {
        public int TotalCount { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}