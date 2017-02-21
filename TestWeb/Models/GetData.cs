using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Text;


namespace TestWeb.Models
{
    public class Test
    {
        public string JOPAUrl()
        {
            string a = null;
            using (SqlConnection ConString = new SqlConnection())
            {

                ConString.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["ConString"].ConnectionString;


                SqlCommand command = new SqlCommand("SELECT StoreData FROM Store", ConString);


                ConString.Open();
                using (SqlDataReader myUrl = command.ExecuteReader())
                {

                    while (myUrl.Read())
                    //if (myUrl.Read())
                    {

                        a = myUrl.GetString(0);

                        // ReadyUrl.WriteLine("{0}\t", myUrl[0].ToString());
                        // Console.ReadLine();

                    }


                    myUrl.Close();
                    ConString.Close();
                }


            }
            return a;

        }

    }
}