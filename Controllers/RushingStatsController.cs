using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using thescoreapp.Models;
using TheScoreApp.Models;

namespace thescoreapp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RushingStatsController : ControllerBase
    {
        private readonly ILogger<RushingStatsController> _logger;
        private readonly StatsContext _statsContext;

        public RushingStatsController(ILogger<RushingStatsController> logger, StatsContext statsContext)
        {
            _logger = logger;
            _statsContext = statsContext;
            // Needed to seed the data in the in memory db
            _statsContext.Database.EnsureCreated();
        }

        [HttpPost("get")]
        public IActionResult GetRushingStats(PaginatedTableRequestDto request)
        {
            var queryable = _statsContext.RushingStats.AsQueryable();
            var filteredAndSorted = request.ApplyRequest(queryable);
            return Ok(filteredAndSorted);
        }

        [HttpPost("getcsv")]
        public async Task<IActionResult> GetRushingStatsCSV(TableRequestDto request)
        {
            var queryable = _statsContext.RushingStats.AsQueryable();
            var filteredAndSorted = request.ApplyRequest(queryable).ToList();

            using var ms = new MemoryStream();
            using var writer = new StreamWriter(ms);
            using var csv = new CsvWriter(writer, CultureInfo.InvariantCulture);
            csv.WriteRecords(filteredAndSorted);
            return File(ms.GetBuffer(), "text/csv", "rushing.csv");
        }
    }
}
