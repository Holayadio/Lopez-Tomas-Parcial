using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace Lopez_Tomas_Parcial;

    public class Product
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
    }

