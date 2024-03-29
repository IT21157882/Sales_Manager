import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "@mui/material";
//import logo from "./image.png";
const doc = new jsPDF();

const exportPDF = (tableData) => {
  //   doc.addImage(logo, 'PNG', 0, 0, 200, 50);
  doc.setFontSize(18);
  // doc.text('Event Report', 30, 20);

  // It can parse html:
  // <table id="my-table"><!-- ... --></table>
  autoTable(doc, { html: "#my-table" });
  const data = tableData.map((event) => [
    event.name,
    event.description,
    event.category,
    event.price,
  ]);
  // Or use javascript directly:
  autoTable(doc, {
    head: [["Name", "Description", "Category", "Price"]],
    body: data,
    startY: 60,
  });

  doc.save("Tea.pdf");
};

const ItemPDF = ({ tableData }) => {
  return (
    <div>
      <Button
        color="secondary"
        onClick={() => {
          exportPDF(tableData);
        }}
        variant="contained"
      >
        Export as PDF
      </Button>
    </div>
  );
};

export default ItemPDF;
