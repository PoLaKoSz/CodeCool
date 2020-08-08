using System;
using System.ServiceModel;

namespace PoLaKoSz.CodeCool.Dotnet.WCF
{
    public interface IDerivativesCalculator
    {
        [ServiceContract]
        public interface IDerivativesCalculator
        {
            [OperationContract]
            decimal CalculateDerivative(int days, string[] symbols, string[] functions);
        }
    }
}
