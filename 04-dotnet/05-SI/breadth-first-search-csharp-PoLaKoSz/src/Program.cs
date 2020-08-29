using BFS_c_sharp.Model;
using System.Collections.Generic;

namespace BFS_c_sharp
{
    public class Program
    {
        static void Main(string[] args)
        {
            RandomDataGenerator generator = new RandomDataGenerator();
            List<UserNode> users = generator.Generate();

            System.Console.WriteLine();

            ShowDistance(users[0], users[1], 1);

            ShowDistance(users[0], users[7], 2);

            ShowDistance(users[29], users[0], 3);            
        }

        public static int DistanceBetween(UserNode firstNode, UserNode lastNode)
        {
            HashSet<UserNode> visitedNodes = new HashSet<UserNode>();
            visitedNodes.Add(firstNode);
            //System.Console.WriteLine($"{firstNode} friends:");
            foreach (UserNode friend in firstNode.Friends)
            {
                //System.Console.WriteLine($"\t{friend}");
                if (friend == lastNode)
                {
                    return 1;
                }
            }

            foreach (UserNode friend in firstNode.Friends)
            {
                return DistanceBetween(friend, lastNode, 1, visitedNodes);
            }

            return -1;
        }

        private static int DistanceBetween(UserNode currentNode, UserNode lastNode, int depth, HashSet<UserNode> visitedNodes)
        {
            if (visitedNodes.Contains(currentNode))
            {
                return -1;
            }

            visitedNodes.Add(currentNode);
            //System.Console.WriteLine($"{currentNode} friends:");
            foreach (UserNode friend in currentNode.Friends)
            {
                //System.Console.WriteLine($"\t{friend}");
                if (friend == lastNode)
                {
                    return depth + 1;
                }
            }

            foreach (UserNode friend in currentNode.Friends)
            {
                int distance = DistanceBetween(friend, lastNode, depth + 1, visitedNodes);
                if (distance != -1)
                {
                    return distance;
                }
            }

            return depth;
        }

        private static void ShowDistance(UserNode firstNode, UserNode lastNode, int expectedDistance)
        {
            int distance = DistanceBetween(firstNode, lastNode);
            System.Console.WriteLine($"Distance between {firstNode.FirstName} {firstNode.FirstName} and {lastNode.FirstName} {lastNode.LastName} = {distance}");
            if (distance != expectedDistance)
            {
                throw new System.ArgumentException($"Wrong distance calculation!\nExpected: {expectedDistance}\nActual: {distance}");
            }
            System.Console.WriteLine("Calculating opposite direction");
            distance = DistanceBetween(lastNode, firstNode);
            if (distance != expectedDistance)
            {
                throw new System.ArgumentException($"Wrong distance calculation for the opposite direction!\nExpected: {expectedDistance}\nActual: {distance}");
            }

            System.Console.WriteLine();
        }
    }
}
