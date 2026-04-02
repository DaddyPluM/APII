using Newtonsoft.Json.Linq;
using Microsoft.EntityFrameworkCore;

namespace HPlusSport.API.Models
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            string jsonPath = Path.Combine(AppContext.BaseDirectory, "Models", "SeedData.json");

            if (!File.Exists(jsonPath)) return;

            var json = JObject.Parse(File.ReadAllText(jsonPath));

            var categories = json["categories"]!.ToObject<List<Category>>();
            var products = json["products"]!.ToObject<List<Product>>();

            modelBuilder.Entity<Category>().HasData(categories);
            modelBuilder.Entity<Product>().HasData(products);
        }
    }
}
