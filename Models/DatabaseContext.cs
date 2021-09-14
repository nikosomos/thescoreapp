using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using thescoreapp.Models;

namespace TheScoreApp.Models
{
    public class StatsContext : DbContext
    {
        public IConfiguration Config {get; set;}
        public DbSet<RushingStats> RushingStats { get; set; }

        public StatsContext(DbContextOptions<StatsContext> options, IConfiguration configuration)
            : base(options)
        {
            Config = configuration;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<RushingStats>().HasKey(x => x.Player);

            // Seed in memory db with json data
            using var sr = new StreamReader(Config["Database:Path"]);
            string json = sr.ReadToEnd();
            var rushingStats = JsonConvert.DeserializeObject<List<RushingStats>>(json);
            modelBuilder.Entity<RushingStats>().HasData(rushingStats.ToArray());
        }
    }
}