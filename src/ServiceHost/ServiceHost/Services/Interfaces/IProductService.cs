﻿using ServiceHost.ViewModels.Product;

namespace ServiceHost.Services.Interfaces;

public interface IProductService
{
    Task<IEnumerable<ProductViewModel>> GetProducts();
    Task<IEnumerable<ProductViewModel>> GetProductByCategory(string category);
    Task<ProductViewModel> GetProduct(string id);
    Task<ProductViewModel> CreateProduct(ProductViewModel product);
    Task<string> GetProductImageUri(string imagePath);
    Task<string> GetProductImageUriFromId(string productId);
}
