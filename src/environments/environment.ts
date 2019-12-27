let base_url = 'http://localhost:1337';

export const environment = {
  production: false,
  addNewInvoice: base_url + '/invoice/add',
  getAllVender: base_url + '/invoice/readv',
  getAllInvoice: base_url + '/invoice/read',
  getVenderInvoiceById: base_url + '/invoice/read',
  updateVenderById:  base_url + '/invoice/update',
  DeleteVenderById: base_url + '/invoice/delete',
  getCommonData: base_url + '/invoice/readcd',
};
