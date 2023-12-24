export async function getInvoiceById(invoiceId: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/invoice?invoiceId=${invoiceId}`, { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      console.log('Invoice data:');
      console.log(data);
      return data;
    } else {
      console.error('Error fetching invoices:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching invoices:', error);
  }
}
