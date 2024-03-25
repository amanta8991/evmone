let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");


if (window.innerWidth < 600) {
  sidebar.classList.remove("open");
} else {
  sidebar.classList.add("open");
}

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}







var modal = document.getElementById("myModal");

var btn = document.getElementById("openModal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      { "Name": "John Doe", "Email": "john.doe@example.com", "Phone number": "555-1234", "Address": "123 Main St", "CIN": "ABC1234567", "GSTIN": "12ABCDE1234F1Z5", "Bank Account": "1234567890" },
      { "Name": "Jane Smith", "Email": "john.doe@example.com", "Phone number": "555-1234", "Address": "456 Elm St", "CIN": "DEF7654321", "GSTIN": "98GFHJ8765D2G7Y", "Bank Account": "0987654321" },
      { "Name": "Bob Johnson", "Email": "john.doe@example.com", "Phone number": "555-1234", "Address": "789 Oak St", "CIN": "GHI9876543", "GSTIN": "56JHTY9876A3B2C", "Bank Account": "5678901234" },
      { "Name": "Alice Brown", "Email": "john.doe@example.com", "Phone number": "555-1234", "Address": "321 Pine St", "CIN": "JKL5432198", "GSTIN": "43BVCD8765J9K0L", "Bank Account": "3456789012" },
      { "Name": "Michael Lee", "Email": "john.doe@example.com", "Phone number": "555-1234", "Address": "654 Cedar St", "CIN": "MNO8765432", "GSTIN": "89UJHY6543D1E2F", "Bank Account": "6789012345" }
    ],
    columnDefs: [
      { field: "Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Email", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Phone number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Address", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "CIN", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "GSTIN", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Bank Account", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        resizable: false,
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#companyGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      { "Name": "John Doe", "Email": "john.doe@example.com", "Phone number": "555-1234", "Address": "123 Main St", "Source": "Google", "Status": "Completed" },
      { "Name": "Jane Smith", "Email": "jane.smith@example.com", "Phone number": "555-5678", "Address": "456 Elm St", "Source": "Email", "Status": "Pending" },
      { "Name": "Bob Johnson", "Email": "bob.johnson@example.com", "Phone number": "555-9101", "Address": "789 Oak St", "Source": "Google", "Status": "Completed" },
      { "Name": "Alice Brown", "Email": "alice.brown@example.com", "Phone number": "555-2345", "Address": "321 Pine St", "Source": "Email", "Status": "Pending" },
      { "Name": "Michael Lee", "Email": "michael.lee@example.com", "Phone number": "555-3456", "Address": "654 Cedar St", "Source": "Google", "Status": "Completed" }
    ],
    columnDefs: [
      { field: "Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Email", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Phone number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Address", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Source", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Status", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        resizable: false,
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                  <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#leadGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      {
        Manufacturer: "Toyota",
        Model: "Camry",
        Variant: "LE",
        "Manufactured Year": 2020,
        Color: "Silver",
        "Fuel Type": "Gasoline",
        Cost: 25000,
        "Chasis Number": "1234567890",
        "Engine Number": "ABC123"
      },
      {
        Manufacturer: "Honda",
        Model: "Civic",
        Variant: "EX",
        "Manufactured Year": 2019,
        Color: "Black",
        "Fuel Type": "Gasoline",
        Cost: 22000,
        "Chasis Number": "0987654321",
        "Engine Number": "XYZ789"
      },
      {
        Manufacturer: "Ford",
        Model: "Fusion",
        Variant: "SE",
        "Manufactured Year": 2018,
        Color: "Blue",
        "Fuel Type": "Gasoline",
        Cost: 23000,
        "Chasis Number": "4567890123",
        "Engine Number": "DEF456"
      },
      {
        Manufacturer: "Chevrolet",
        Model: "Malibu",
        Variant: "LT",
        "Manufactured Year": 2021,
        Color: "Red",
        "Fuel Type": "Gasoline",
        Cost: 27000,
        "Chasis Number": "7890123456",
        "Engine Number": "GHI789"
      },
      {
        Manufacturer: "Nissan",
        Model: "Altima",
        Variant: "S",
        "Manufactured Year": 2017,
        Color: "White",
        "Fuel Type": "Gasoline",
        Cost: 20000,
        "Chasis Number": "2345678901",
        "Engine Number": "JKL012"
      }
    ],
    columnDefs: [
      { field: "Manufacturer", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Model", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Variant", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Manufactured Year", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Color", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Fuel Type", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Cost", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Chasis Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Engine Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        resizable: false,
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                    <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#inventoryGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      {
        "Name": "John Doe",
        "Email": "john.doe@example.com",
        "Phone Number": "123-456-7890",
        "Amount Paid": 1000,
        "Mode of Payment": "Credit Card",
        "Installment Number": 1
      },
      {
        "Name": "Jane Smith",
        "Email": "jane.smith@example.com",
        "Phone Number": "987-654-3210",
        "Amount Paid": 1500,
        "Mode of Payment": "PayPal",
        "Installment Number": 2
      },
      {
        "Name": "Michael Johnson",
        "Email": "michael.johnson@example.com",
        "Phone Number": "456-789-0123",
        "Amount Paid": 800,
        "Mode of Payment": "Bank Transfer",
        "Installment Number": 3
      },
      {
        "Name": "Emily Davis",
        "Email": "emily.davis@example.com",
        "Phone Number": "789-012-3456",
        "Amount Paid": 1200,
        "Mode of Payment": "Cash",
        "Installment Number": 1
      },
      {
        "Name": "Christopher Wilson",
        "Email": "christopher.wilson@example.com",
        "Phone Number": "234-567-8901",
        "Amount Paid": 2000,
        "Mode of Payment": "Cheque",
        "Installment Number": 2
      }
    ],
    columnDefs: [
      { field: "Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Email", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Phone Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Amount Paid", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Mode of Payment", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Installment Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        resizable: false,
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                      <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#payGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      {
        "Lender Name": "ABC Bank",
        "Address": "123 Main St, City, Country",
        "Rate of Interest": "5.5%",
        "Cibil Requirement": "700",
        "Performa invoice": "INV-001"
      },
      {
        "Lender Name": "XYZ Credit Union",
        "Address": "456 Elm St, Town, Country",
        "Rate of Interest": "6.2%",
        "Cibil Requirement": "720",
        "Performa invoice": "INV-002"
      },
      {
        "Lender Name": "PQR Finance",
        "Address": "789 Oak St, Village, Country",
        "Rate of Interest": "5.8%",
        "Cibil Requirement": "680",
        "Performa invoice": "INV-003"
      },
      {
        "Lender Name": "LMN Mortgage",
        "Address": "101 Pine St, Suburb, Country",
        "Rate of Interest": "5.7%",
        "Cibil Requirement": "690",
        "Performa invoice": "INV-004"
      },
      {
        "Lender Name": "EFG Investments",
        "Address": "202 Cedar St, Rural, Country",
        "Rate of Interest": "6.0%",
        "Cibil Requirement": "710",
        "Performa invoice": "INV-005"
      }
    ],
    columnDefs: [
      { field: "Lender Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Address", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Rate of Interest", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Cibil Requirement", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Performa invoice", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        resizable: false,
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                        <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#loanGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      {
        "Percentage": "10%",
        "From Date": "2023-01-01",
        "To Date": "2023-12-31",
        "Location": "New York",
        "Store": "ABC Store",
        "Number of Usage": 50,
        "Code": "ABC001"
      },
      {
        "Percentage": "15%",
        "From Date": "2023-02-01",
        "To Date": "2023-11-30",
        "Location": "Los Angeles",
        "Store": "XYZ Mart",
        "Number of Usage": 40,
        "Code": "XYZ002"
      },
      {
        "Percentage": "20%",
        "From Date": "2023-03-01",
        "To Date": "2023-10-31",
        "Location": "Chicago",
        "Store": "PQR Supermarket",
        "Number of Usage": 35,
        "Code": "PQR003"
      },
      {
        "Percentage": "25%",
        "From Date": "2023-04-01",
        "To Date": "2023-09-30",
        "Location": "Houston",
        "Store": "LMN Market",
        "Number of Usage": 30,
        "Code": "LMN004"
      },
      {
        "Percentage": "30%",
        "From Date": "2023-05-01",
        "To Date": "2023-08-31",
        "Location": "San Francisco",
        "Store": "EFG Outlet",
        "Number of Usage": 25,
        "Code": "EFG005"
      }
    ],
    columnDefs: [
      { field: "Percentage", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "From Date", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "To Date", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Location", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Store", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Number of Usage", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Code", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        resizable: false,
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                            <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#discountGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      {
        "Name": "John Doe",
        "Email": "john.doe@example.com",
        "Phone Number": "123-456-7890",
        "Address": "123 Main St, City, Country",
        "Exchange vehicle": "Toyota Camry",
        "Payment": "$25000",
        "Finance Preference": "Bank Loan",
        "Vehicle Details": "2023 Toyota Camry LE",
        "Discount": "10%",
        "Approval": "Rejected"
      },
      {
        "Name": "Jane Smith",
        "Email": "jane.smith@example.com",
        "Phone Number": "987-654-3210",
        "Address": "456 Elm St, Town, Country",
        "Exchange vehicle": "Honda Civic",
        "Payment": "$22000",
        "Finance Preference": "Lease",
        "Vehicle Details": "2022 Honda Civic EX",
        "Discount": "Nil",
        "Approval": "Approved"
      },
      {
        "Name": "Michael Johnson",
        "Email": "michael.johnson@example.com",
        "Phone Number": "456-789-0123",
        "Address": "789 Oak St, Village, Country",
        "Exchange vehicle": "Ford Fusion",
        "Payment": "$23000",
        "Finance Preference": "Cash",
        "Vehicle Details": "2021 Ford Fusion SE",
        "Discount": "5%",
        "Approval": "Rejected"
      },
      {
        "Name": "Emily Davis",
        "Email": "emily.davis@example.com",
        "Phone Number": "789-012-3456",
        "Address": "101 Pine St, Suburb, Country",
        "Exchange vehicle": "Chevrolet Malibu",
        "Payment": "$27000",
        "Finance Preference": "Credit Card",
        "Vehicle Details": "2020 Chevrolet Malibu LT",
        "Discount": "Nil",
        "Approval": "Approved"
      },
      {
        "Name": "Christopher Wilson",
        "Email": "christopher.wilson@example.com",
        "Phone Number": "234-567-8901",
        "Address": "202 Cedar St, Rural, Country",
        "Exchange vehicle": "Nissan Altima",
        "Payment": "$20000",
        "Finance Preference": "Bank Loan",
        "Vehicle Details": "2019 Nissan Altima S",
        "Discount": "15%",
        "Approval": "Approved"
      }
    ],
    columnDefs: [
      { field: "Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Email", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Phone Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Address", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Exchange vehicle", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Payment", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Finance Preference", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Vehicle Details", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Discount", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Approval", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },

      {
        headerName: "Actions",
        pinned: 'right',
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                                <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#obfGrid');
  new agGrid.Grid(eGridDiv, gridOptions);

  window.editRow = function (rowIndex) {
    // Redirect to the edit page
    window.location.href = './editobflevel1.html'; // Replace 'edit-page.html' with your desired URL
  };
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      {
        "Name": "John Doe",
        "Email": "john.doe@example.com",
        "Phone Number": "123-456-7890",
        "Address": "123 Main St, City, Country",
        "Exchange vehicle": "Toyota Camry",
        "Payment": "$25000",
        "Finance Preference": "Bank Loan",
        "Vehicle Details": "2023 Toyota Camry LE",
        "Discount": "10%",
        "Approval": "Approved"
      },
      {
        "Name": "Jane Smith",
        "Email": "jane.smith@example.com",
        "Phone Number": "987-654-3210",
        "Address": "456 Elm St, Town, Country",
        "Exchange vehicle": "Honda Civic",
        "Payment": "$22000",
        "Finance Preference": "Lease",
        "Vehicle Details": "2022 Honda Civic EX",
        "Discount": "Nil",
        "Approval": "Approved"
      },
      {
        "Name": "Michael Johnson",
        "Email": "michael.johnson@example.com",
        "Phone Number": "456-789-0123",
        "Address": "789 Oak St, Village, Country",
        "Exchange vehicle": "Ford Fusion",
        "Payment": "$23000",
        "Finance Preference": "Cash",
        "Vehicle Details": "2021 Ford Fusion SE",
        "Discount": "5%",
        "Approval": "Approved"
      },
      {
        "Name": "Emily Davis",
        "Email": "emily.davis@example.com",
        "Phone Number": "789-012-3456",
        "Address": "101 Pine St, Suburb, Country",
        "Exchange vehicle": "Chevrolet Malibu",
        "Payment": "$27000",
        "Finance Preference": "Credit Card",
        "Vehicle Details": "2020 Chevrolet Malibu LT",
        "Discount": "Nil",
        "Approval": "Approved"
      },
      {
        "Name": "Christopher Wilson",
        "Email": "christopher.wilson@example.com",
        "Phone Number": "234-567-8901",
        "Address": "202 Cedar St, Rural, Country",
        "Exchange vehicle": "Nissan Altima",
        "Payment": "$20000",
        "Finance Preference": "Bank Loan",
        "Vehicle Details": "2019 Nissan Altima S",
        "Discount": "15%",
        "Approval": "Approved"
      }
    ],
    columnDefs: [
      { field: "Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Email", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Phone Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Address", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Exchange vehicle", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Payment", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Finance Preference", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Vehicle Details", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Discount", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Approval", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },

      {
        headerName: "Actions",
        pinned: 'right',
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                                <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#approvedGrid');
  new agGrid.Grid(eGridDiv, gridOptions);

  window.editRow = function (rowIndex) {
    // Redirect to the edit page
    window.location.href = './editobflevel2.html'; // Replace 'edit-page.html' with your desired URL
  };
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      {
        "Name": "John Doe",
        "Email": "john.doe@example.com",
        "Phone Number": "123-456-7890",
        "OBF Approved Date": "2024-02-01",
        "Document Approved Date": "2024-02-06",
        "Days left for Allotment": "4"
      },
      {
        "Name": "Jane Smith",
        "Email": "jane.smith@example.com",
        "Phone Number": "987-654-3210",
        "OBF Approved Date": "2024-02-02",
        "Document Approved Date": "2024-02-07",
        "Days left for Allotment": "Free for Allotment"
      },
      {
        "Name": "Michael Johnson",
        "Email": "michael.johnson@example.com",
        "Phone Number": "456-789-0123",
        "OBF Approved Date": "2024-02-03",
        "Document Approved Date": "2024-02-08",
        "Days left for Allotment": "3"
      },
      {
        "Name": "Emily Davis",
        "Email": "emily.davis@example.com",
        "Phone Number": "789-012-3456",
        "OBF Approved Date": "2024-02-04",
        "Document Approved Date": "2024-02-09",
        "Days left for Allotment": "5"
      },
      {
        "Name": "Christopher Wilson",
        "Email": "christopher.wilson@example.com",
        "Phone Number": "234-567-8901",
        "OBF Approved Date": "2024-02-05",
        "Document Approved Date": "2024-02-10",
        "Days left for Allotment": "Free for Allotment",
      }
    ],
    columnDefs: [
      { field: "Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Email", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Phone Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "OBF Approved Date", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Document Approved Date", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Days left for Allotment", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                                <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#allocationGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      { "Booking ID": "ABC123", "Name": "John Doe", "Email": "johndoe@example.com", "Phone Number": "123-456-7890", "Booking Status": "Confirmed", "Cancellation Request": "No", "Cancellation Approval": "N/A", "Reason for Cancellation": "N/A" },
      { "Booking ID": "DEF456", "Name": "Jane Smith", "Email": "janesmith@example.com", "Phone Number": "987-654-3210", "Booking Status": "Pending", "Cancellation Request": "Yes", "Cancellation Approval": "Pending", "Reason for Cancellation": "Change of plans" },
      { "Booking ID": "GHI789", "Name": "Michael Johnson", "Email": "michael@example.com", "Phone Number": "555-555-5555", "Booking Status": "Confirmed", "Cancellation Request": "Yes", "Cancellation Approval": "Approved", "Reason for Cancellation": "Family emergency" },
      { "Booking ID": "JKL012", "Name": "Emily Brown", "Email": "emilybrown@example.com", "Phone Number": "111-222-3333", "Booking Status": "Confirmed", "Cancellation Request": "No", "Cancellation Approval": "N/A", "Reason for Cancellation": "N/A" },
      { "Booking ID": "MNO345", "Name": "David Wilson", "Email": "davidwilson@example.com", "Phone Number": "777-888-9999", "Booking Status": "Confirmed", "Cancellation Request": "Yes", "Cancellation Approval": "Denied", "Reason for Cancellation": "Change of travel plans" }
    ],
    columnDefs: [
      { field: "Booking ID", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Email", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Phone Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Booking Status", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Cancellation Request", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Cancellation Approval", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Reason for Cancellation", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                                <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#cancelGrid');
  new agGrid.Grid(eGridDiv, gridOptions);
});

document.addEventListener('DOMContentLoaded', function () {
  var gridOptions = {
    rowData: [
      {
        "Booking ID": 12345,
        "Name": "John Doe",
        "Email": "johndoe@example.com",
        "Phone Number": "123-456-7890",
        "Cost": "$100.00",
        "Payment Status": "Paid",
        "Vehicle": "Sedan",
        "Model": "ABC123",
        "Color": "Blue",
        "Discount": "10%",
        "Confirmation Status": "Confirmed"
      },
      {
        "Booking ID": 54321,
        "Name": "Jane Smith",
        "Email": "janesmith@example.com",
        "Phone Number": "987-654-3210",
        "Cost": "$150.00",
        "Payment Status": "Pending",
        "Vehicle": "SUV",
        "Model": "XYZ789",
        "Color": "Red",
        "Discount": "0%",
        "Confirmation Status": "Pending"
      },
      {
        "Booking ID": 67890,
        "Name": "Michael Johnson",
        "Email": "michael@example.com",
        "Phone Number": "456-789-0123",
        "Cost": "$80.00",
        "Payment Status": "Paid",
        "Vehicle": "Hatchback",
        "Model": "DEF456",
        "Color": "Black",
        "Discount": "5%",
        "Confirmation Status": "Confirmed"
      },
      {
        "Booking ID": 24680,
        "Name": "Sarah Lee",
        "Email": "sarahlee@example.com",
        "Phone Number": "789-012-3456",
        "Cost": "$120.00",
        "Payment Status": "Paid",
        "Vehicle": "Convertible",
        "Model": "GHI789",
        "Color": "Silver",
        "Discount": "15%",
        "Confirmation Status": "Confirmed"
      },
      {
        "Booking ID": 13579,
        "Name": "David Brown",
        "Email": "davidbrown@example.com",
        "Phone Number": "321-654-9870",
        "Cost": "$200.00",
        "Payment Status": "Paid",
        "Vehicle": "Truck",
        "Model": "JKL012",
        "Color": "Green",
        "Discount": "0%",
        "Confirmation Status": "Confirmed"
      }],
    columnDefs: [
      { field: "Booking ID", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Name", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Email", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Phone Number", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Cost", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Payment Status", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Vehicle", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Model", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Color", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Discount", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      { field: "Confirmation Status", sortable: true, suppressMovable: true, cellStyle: { textAlign: 'left' } },
      {
        headerName: "Actions",
        pinned: 'right',
        sortable: false,
        suppressMovable: true,
        cellRenderer: function (params) {
          return `<button class="edit-button" onclick="editRow(${params.node.rowIndex})">Edit</button>
                                <button class="delete-button" onclick="deleteRow(${params.node.rowIndex})">Delete</button>`;
        }
      }
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 150,
      resizable: true,
    },
    suppressCellFocus: true,
    pagination: true,
    paginationAutoPageSize: true
  };

  var eGridDiv = document.querySelector('#confirmGrid');
  new agGrid.Grid(eGridDiv, gridOptions);

  window.editRow = function (rowIndex) {
    // Redirect to the edit page
    window.location.href = './editregisterconfirm.html'; // Replace 'edit-page.html' with your desired URL
  };
});




document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('fileInput').addEventListener('change', function () {
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        input.closest('.circle-container').querySelector('.circle-image').src = e.target.result;
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
});




function previewFile(input, previewId) {
  const preview = document.getElementById(previewId);
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onloadend = function () {
      const pdfDataUrl = reader.result;
      const previewLink = document.createElement('a');
      previewLink.setAttribute('href', pdfDataUrl);
      previewLink.setAttribute('download', file.name);
      previewLink.textContent = 'Click here to preview';
      preview.innerHTML = '';
      preview.appendChild(previewLink);
    };
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = 'No file selected';
  }
}



document.querySelector("#files").addEventListener("change", (e) => { //CHANGE EVENT FOR UPLOADING PHOTOS
  if (window.File && window.FileReader && window.FileList && window.Blob) { //CHECK IF FILE API IS SUPPORTED
    const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
    const output = document.querySelector("#result");
    output.innerHTML = "";
    for (let i = 0; i < files.length; i++) { // LOOP THROUGH THE FILE LIST OBJECT
      if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
      const picReader = new FileReader(); // RETRIEVE DATA URI 
      picReader.addEventListener("load", function (event) { // LOAD EVENT FOR DISPLAYING PHOTOS
        const picFile = event.target;
        const div = document.createElement("div");
        div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
        output.appendChild(div);
      });
      picReader.readAsDataURL(files[i]); //READ THE IMAGE
    }
  } else {
    alert("Your browser does not support File API");
  }
});




