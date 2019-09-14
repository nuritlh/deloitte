using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using deloitte.Models;
using Microsoft.AspNetCore.Mvc;

namespace deloitte.Controllers
{
    [Route("api/[controller]")]
    public class AutoCompleteController : Controller
    {
        [HttpGet("people")]
        public IEnumerable<Person> GetPeople()
        {
            return People.GetEveryone();
        }
    }
}
