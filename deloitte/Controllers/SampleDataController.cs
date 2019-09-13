using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace deloitte.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}



//object employee
//{
//    imageUrl: string;
//    workTitle: string;
//    name: string;
//}

//object[] employeesData = 
//[
//  {
//    imageUrl: '../../assets/images/deloitteImg/Jack_Sparrow.jpg',
//    workTitle: 'Manager',
//    name: 'Captain Jack Sparrow'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/The_Joker.jpg',
//    workTitle: 'Team Leader',
//    name: 'The Joker'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Gandalf.jpg',
//    workTitle: 'CEO',
//    name: 'Gandalf'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Ariel.jpg',
//    workTitle: 'Administrative Director',
//    name: 'Ariel'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Agent_J.jpg',
//    workTitle: 'Administrative',
//    name: 'Agent J'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Captian_America.jpg',
//    workTitle: 'Team Leader',
//    name: 'Captain America'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/The_Bride.jpg',
//    workTitle: 'Legal Secretary',
//    name: 'The Bride'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Cinderella.jpg',
//    workTitle: 'Direct Salesperson',
//    name: 'Cinderella'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Zoolander.jpg',
//    workTitle: 'Mailroom Personnel',
//    name: 'Zoolander'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Dorothy.jpg',
//    workTitle: 'Buyer',
//    name: 'Dorothy'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Ghostface.jpg',
//    workTitle: 'Buyer',
//    name: 'Ghostface'
//  },
//  {
//    imageUrl: '../../assets/images/deloitteImg/Darth_Vader.jpg',
//    workTitle: 'FrontEnd Developer',
//     name: 'Darth Vader'
//  }
//]
