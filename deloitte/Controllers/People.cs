using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace deloitte.Models
{
    public static class People
    {
        public static IEnumerable<Person> GetEveryone()
        {
            return new List<Person>()
            {
                new Person()
                  {
                    ImageUrl = "Jack_Sparrow.jpg",
                    WorkTitle = "Manager",
                    Name = "Captain Jack Sparrow"
                  },
                new Person()
                  {
                    ImageUrl = "The_Joker.jpg",
                    WorkTitle = "Team Leader",
                    Name = "The Joker"
                  },
                new Person()
                  {
                    ImageUrl = "Gandalf.jpg",
                    WorkTitle = "CEO",
                    Name = "Gandalf"
                  },
                new Person()
                  {
                    ImageUrl = "Ariel.jpg",
                    WorkTitle = "Administrative Director",
                    Name = "Ariel"
                  },
                new Person()
                  {
                    ImageUrl = "Agent_J.jpg",
                    WorkTitle = "Administrative",
                    Name = "Agent J"
                  },
                new Person()
                  {
                    ImageUrl = "Captian_America.jpg",
                    WorkTitle = "Team Leader",
                    Name = "Captain America"
                  },
                new Person()
                  {
                    ImageUrl = "The_Bride.jpg",
                    WorkTitle = "Legal Secretary",
                    Name = "The Bride"
                  },
                new Person()
                  {
                    ImageUrl = "Cinderella.jpg",
                    WorkTitle = "Direct Salesperson",
                    Name = "Cinderella"
                  },
                new Person()
                  {
                    ImageUrl = "Zoolander.jpg",
                    WorkTitle = "Mailroom Personnel",
                    Name = "Zoolander"
                  },
                new Person()
                  {
                    ImageUrl = "Dorothy.jpg",
                    WorkTitle = "Buyer",
                    Name = "Dorothy"
                  },
                new Person()
                  {
                    ImageUrl = "Ghostface.jpg",
                    WorkTitle = "Buyer",
                    Name = "Ghostface"
                  },
                new Person()
                  {
                    ImageUrl = "Darth_Vader.jpg",
                    WorkTitle = "FrontEnd Developer",
                    Name = "Darth Vader"
                  },
                new Person()
                  {
                    ImageUrl = "Maximus.jpg",
                    WorkTitle = "FrontEnd Developer",
                    Name = "Maximus"
                  },
                new Person()
                  {
                    ImageUrl = "Legolas.jpg",
                    WorkTitle = "FrontEnd Developer",
                    Name = "Legolas"
                  },
                new Person()
                  {
                    ImageUrl = "Wednesday_Addams.jpg",
                    WorkTitle = "FrontEnd Developer",
                    Name = "Wednesday Addams"
                  },
                new Person()
                  {
                    ImageUrl = "Inigo_Montoya.jpg",
                    WorkTitle = "Backend Developer",
                    Name = "Inigo Montoya"
                  }
            };
        }
    }

    public class Person
    {
        public string ImageUrl { get; set; }
        public string WorkTitle { get; set; }
        public string Name { get; set; }
    }
}


