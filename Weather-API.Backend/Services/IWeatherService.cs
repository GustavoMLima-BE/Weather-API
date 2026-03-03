public interface IWeatherService
{
    Task<WeatherModel?> GetWeatherAsync(string city);
}