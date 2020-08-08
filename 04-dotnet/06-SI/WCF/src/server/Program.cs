using System;
using System.ServiceModel;
using System.ServiceModel.Description;

namespace PoLaKoSz.CodeCool.Dotnet.WCF
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                Type serviceType = typeof(Calculator);

                using (ServiceHost host = new ServiceHost(serviceType))
                {
                    host.Open();
                    Console.WriteLine("The derivative calculator is running");
                    foreach (var address in host.BaseAddresses)
                    {
                        Console.WriteLine($"BaseAddress: {address}");
                    }
                    Console.WriteLine($"Host is running...Press Enter to stop");
                    Console.ReadLine();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An exception occured. {ex.Message}");
            }
            Console.WriteLine("Service is stopped.");
            Console.ReadLine();
        }
    }
}
