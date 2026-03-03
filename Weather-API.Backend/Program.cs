var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHttpClient();
builder.Services.AddScoped<IWeatherService, WeatherService>();

var app = builder.Build();

app.MapControllers();

app.Run();