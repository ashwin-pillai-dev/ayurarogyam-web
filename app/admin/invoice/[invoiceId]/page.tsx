import { getInvoiceById } from "../services";

export default async function page({ params }: { params:{invoiceId:string}}){

    const invoiceId = params.invoiceId
    console.log(`invoiceId:₹{invoiceId}`);
    console.log(params);

    const invoice = await getInvoiceById(invoiceId)
    const { invoiceNumber, quantity, subTotal, total, invoiceDate, invoiceItems } = invoice;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Invoice #{invoiceNumber}</h1>
    <p className="text-gray-600 mb-4">Date: {new Date(invoiceDate).toLocaleDateString()}</p>

    <div className="border rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-200">
          <tr >
            <th className="py-2 px-4 ">Quantity</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Unit Price</th>
            <th className="py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item:any) => (
            <tr key={item.id}>
              <td className="py-2 px-4 text-center">{item.quantity}</td>
              <td className="py-2 px-4 text-center">{item.product.name}</td>
              <td className="py-2 px-4 text-center">₹{item.amount}</td>
              <td className="py-2 px-4 text-center">₹{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mt-8 text-right">
      <p className="text-lg">Subtotal: ₹{subTotal}</p>
      <p className="text-lg">CGST: ₹{Math.ceil((6/ 100) * subTotal)}</p>
      <p className="text-lg">SGST:₹{Math.ceil((6/ 100) * subTotal)}</p>
      <p className="text-lg">Total: ₹{total}</p>
    </div>
  </div>
  );
    

    

}