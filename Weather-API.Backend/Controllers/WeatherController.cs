using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/weather")]
public class WeatherController : ControllerBase
{
    private readonly IWeatherService _weatherService;

    public WeatherController(IWeatherService weatherService)
    {
        _weatherService = weatherService;
    }

    [HttpGet("{city}")]
    public async Task<IActionResult> Get(string city)
    {
        var result = await _weatherService.GetWeatherAsync(city);

        if (result == null)
            return NotFound("Cidade não encontrada.");

        return Ok(result);
    }
}