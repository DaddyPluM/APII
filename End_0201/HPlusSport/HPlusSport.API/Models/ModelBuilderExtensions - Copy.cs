//using System.Runtime.CompilerServices;
//using Microsoft.EntityFrameworkCore;

//namespace HPlusSport.API.Models
//{
//    public static class ModelBuilderExtensions
//    {
//        public static void Seed(this ModelBuilder modelBuilder)
//        {
//            modelBuilder.Entity<Category>().HasData(
//                new Category { Id = 1, Name = "Men's Apparel" },
//                new Category { Id = 2, Name = "Women's Apparel" },
//                new Category { Id = 3, Name = "Mineral Water" },
//                new Category { Id = 4, Name = "Books" },
//                new Category { Id = 5, Name = "Supplements" }
//            );

//            modelBuilder.Entity<Product>().HasData(
//                new Product { Id = 1, CategoryId = 1, Name = "V-Neck T-Shirt", Sku = "AWMVNT", Price = 17, IsAvailable = true, Description = "Men's V-Neck T-Shirt" },
//                new Product { Id = 2, CategoryId = 1, Name = "V-Neck Sweater", Sku = "AWMVNS", Price = 65, IsAvailable = true, Description = "Men's V-Neck Sweater" },
//                new Product { Id = 3, CategoryId = 1, Name = "V-Neck Pullover", Sku = "AWMVNP", Price = 65, IsAvailable = true, Description = "Men's V-Neck Pullover" },
//                new Product { Id = 4, CategoryId = 1, Name = "Unisex Thermal Vest", Sku = "AWMUTV", Price = 95, IsAvailable = true, Description = "Unisex Thermal Vest" },
//                new Product { Id = 5, CategoryId = 2, Name = "Stretchy Dance Pants", Sku = "AWWSDP", Price = 55, IsAvailable = true, Description = "Women's Stretchy Dance Pants" },
//                new Product { Id = 6, CategoryId = 2, Name = "Ultra-Soft Tank Top", Sku = "AWWUTT", Price = 22, IsAvailable = true, Description = "Women's Ultra-Soft Tank Top" },
//                new Product { Id = 7, CategoryId = 2, Name = "Unisex Thermal Vest", Sku = "AWWUTV", Price = 95, IsAvailable = true, Description = "Women's Unisex Thermal Vest" },
//                new Product { Id = 8, CategoryId = 2, Name = "V-Next T-Shirt", Sku = "AWWVNT", Price = 17, IsAvailable = true, Description = "Women's V-Next T-Shirt" },
//                new Product { Id = 9, CategoryId = 3, Name = "Blueberry Mineral Water", Sku = "MWB", Price = 2.8M, IsAvailable = true, Description = "Blueberry Mineral Water" },
//                new Product { Id = 10, CategoryId = 3, Name = "Lemon-Lime Mineral Water", Sku = "MWLL", Price = 2.8M, IsAvailable = true, Description = "Lemon-Lime Mineral Water" },
//                new Product { Id = 11, CategoryId = 3, Name = "Orange Mineral Water", Sku = "MWO", Price = 2.8M, IsAvailable = true, Description = "Orange Mineral Water" },
//                new Product { Id = 12, CategoryId = 3, Name = "Peach Mineral Water", Sku = "MWP", Price = 2.8M, IsAvailable = true, Description = "Peach Mineral Water" },
//                new Product { Id = 13, CategoryId = 3, Name = "Raspberry Mineral Water", Sku = "MWR", Price = 2.8M, IsAvailable = true, Description = "Raspberry Mineral Water" },
//                new Product { Id = 14, CategoryId = 3, Name = "Strawberry Mineral Water", Sku = "MWS", Price = 2.8M, IsAvailable = true, Description = "Strawberry Mineral Water" },
//                new Product { Id = 15, CategoryId = 4, Name = "In the Kitchen with H+ Sport", Sku = "PITK", Price = 24.99M, IsAvailable = true, Description = "In the Kitchen with H+ Sport" },
//                new Product { Id = 16, CategoryId = 5, Name = "Calcium 400 IU (150 tablets)", Sku = "SC400", Price = 9.99M, IsAvailable = true, Description = "Calcium 400 IU (150 tablets)" }
//            );

//        }
//    }
//}
