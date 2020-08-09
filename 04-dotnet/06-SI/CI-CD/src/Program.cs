using System;
using System.Diagnostics;
using System.Diagnostics;
using System.Timers;

namespace CodeCool.CICD
{
    public class Program
    {
        private static readonly PerformanceCounter HeapCounter = null;
        private static readonly PerformanceCounter ExceptionCounter = null;
        private static readonly Timer DemoTimer;

        static Program()
        {
            DemoTimer = new Timer(TimeSpan.FromSeconds(3).TotalMilliseconds);
            DemoTimer.Elapsed += new ElapsedEventHandler(OnTick);
            DemoTimer.Enabled = true;
            HeapCounter = new PerformanceCounter(".NET CLR Memory", "# Bytes in all Heaps");
            HeapCounter.InstanceName = "_Global_";
            ExceptionCounter = new PerformanceCounter(".NET CLR Exceptions", "# of Exceps Thrown");
            ExceptionCounter.InstanceName = "_Global_";
            Console.WriteLine("Press [Enter] to Quit Program");
            Console.ReadLine();
        }

        public static void Main(string[] args)
        {
            if (!EventLog.SourceExists("Demo", Environment.MachineName))
            {
                EventLog.CreateEventSource("Demo", "Application", Environment.MachineName);
            }
            EventLog logDemo = new EventLog("Application", Environment.MachineName, "Demo");
            logDemo.WriteEntry("Event Written to Application Log",
                              EventLogEntryType.Information,
                              234,
                              Convert.ToInt16(3));

            WriteToEventLog();
        }

        public static void WriteToEventLog()
        {
            WqlEventQuery demoQuery = new WqlEventQuery("__InstanceCreationEvent",
                          TimeSpan.FromSeconds(1),
                          "TargetInstance is a \"Win32_Process\"");
            ManagementEventWatcher demoWatcher = new ManagementEventWatcher();
            demoWatcher.Query = demoQuery;
            demoWatcher.Options.Timeout = new TimeSpan(0, 0, 30);
            Console.WriteLine("Open an application to trigger an event.");
            ManagementBaseObject e = demoWatcher.WaitForNextEvent();
            EventLog demoLog = new EventLog("Chap10Demo");
            demoLog.Source = "Demo";
            String eventName = ((ManagementBaseObject)e["TargetInstance"])["Name"].ToString();
            Console.WriteLine(eventName);
            demoLog.WriteEntry(eventName, EventLogEntryType.Information);
            demoWatcher.Stop();
        }

        private static void Task2()
        {
            EventLog myLog = new EventLog("X", "localhost", "Demo");
            Trace.AutoFlush = true;
            EventLogTraceListener myListener = new EventLogTraceListener(myLog);
            Trace.WriteLine("This is a test");
        }

        private static void OnTick(object source, ElapsedEventArgs e)
        {
            Console.WriteLine("# of Bytes in all Heaps : " + HeapCounter.NextValue().ToString());
            Console.WriteLine("# of Framework Exceptions Thrown : " + ExceptionCounter.NextValue().ToString());
        }
    }
}
