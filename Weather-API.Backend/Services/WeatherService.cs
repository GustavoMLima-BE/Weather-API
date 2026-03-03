using System.Text.Json;

public class WeatherService : IWeatherService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;

    public WeatherService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _configuration = configuration;
    }

    public async Task<WeatherModel?> GetWeatherAsync(string city)
    {
        var apiKey = _configuration["VisualCrossing:ApiKey"];
        var baseUrl = _configuration["VisualCrossing:BaseUrl"];

        var url = $"{baseUrl}/{Uri.EscapeDataString(city)}?unitGroup=metric&key={apiKey}&contentType=json";

        var response = await _httpClient.GetAsync(url);

        if (!response.IsSuccessStatusCode)
            return null;

        var content = await response.Content.ReadAsStringAsync();

        using var json = JsonDocument.Parse(content);
        var root = json.RootElement;

        return new WeatherModel
        {
            City = root.GetProperty("address").GetString() ?? "",
            Temperature = root.GetProperty("currentConditions").GetProperty("temp").GetDouble(),
            Description = root.GetProperty("currentConditions").GetProperty("conditions").GetString() ?? ""
        };
    }
}