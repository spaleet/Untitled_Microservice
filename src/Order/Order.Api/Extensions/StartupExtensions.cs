﻿using Order.Infrastructure.Data;

namespace Order.Api.Extensions;

public static class StartupExtensions
{
    public static void CreateAndSeedDatabaseAsync(this IHost host)
    {
        using var scope = host.Services.CreateScope();

        var sp = scope.ServiceProvider;
        var loggerFactory = sp.GetRequiredService<ILoggerFactory>();

        try
        {
            var orderDbContext = sp.GetRequiredService<OrderDbContext>();
            OrderDbContextSeed.SeedAsync(orderDbContext, loggerFactory).Wait();
        }
        catch (Exception ex)
        {
            var logger = loggerFactory.CreateLogger<Program>();
            logger.LogError(ex.Message);
        }
    }
}
