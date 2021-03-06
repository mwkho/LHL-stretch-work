const salesTax = {
  'AB': 0.05,
  'BC':  0.12
}

const calculateSalesTax = function(salesData, taxRates){
  let companyTax = {};
  for (let company of salesData){
    // get the information of each company
    let nameOfCompany = company.name;
    let province = company.province;
    let sales = company.sales;

    // first encouter with company, initilize with total sales and tax to 0;
    if (companyTax[nameOfCompany]){
      companyTax[nameOfCompany] = {
        totalSales: 0,
        totalTax: 0
      };
    
    // add up the sales then apply the provincial tax if its in the tax rates
    let total = sumArray(sales);
    companyTax[nameOfCompany].totalSales += total;


    if(taxRates[province]){
      companyTax[nameOfCompany].totalTax += calculateTax(total, taxRates[province])
    }
  }
  return companyTax;
}

const sumArray = function(arr1){
  let total = 0;
  arr1.forEach(element => {total += element
  });
  return total;
}

// helper function that takes in number of sales and returns the total of the tax
const calculateTax = function(sales, tax){
  return sales * tax;
}


const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

/*
const results = 

*/