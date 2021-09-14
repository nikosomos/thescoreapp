using System;
using System.Linq;
using Newtonsoft.Json;

namespace thescoreapp.Models
{
    public class RushingStats
    {
        [JsonProperty("Player")]
        public string Player { get; set; }
        [JsonProperty("Team")]
        public string Team { get; set; }
        [JsonProperty("Pos")]
        public string Position { get; set; }
        [JsonProperty("Att")]
        public double Attempts { get; set; }
        [JsonProperty("Att/G")]
        public double AttemptsPerGame { get; set; }
        [JsonProperty("Yds")]
        public double Yards { get; set; }
        [JsonProperty("Avg")]
        public double YardsPerAttempt { get; set; }
        [JsonProperty("Yds/G")]
        public double YardsPerGame { get; set; }
        [JsonProperty("TD")]
        public double Touchdowns { get; set; }
        [JsonProperty("Lng")]
        public string Longest { get; set; }
        [JsonProperty("1st")]
        public double FirstDowns { get; set; }
        [JsonProperty("1st%")]
        public double FirstDownPercent { get; set; }
        [JsonProperty("20+")]
        public double TwentyPlusYardCount { get; set; }
        [JsonProperty("40+")]
        public double FortyPlusYardCount { get; set; }
        [JsonProperty("FUM")]
        public double Fumbles { get; set; }

        public RushingStats() { }
    }
}