import express from "express";
import bodyParser from "body-parser";
import markdownIt from "markdown-it";
import htmlDocx from "html-docx-js";

const app = express();
const md = new markdownIt();

app.use(bodyParser.text({ type: "*/*" }));

app.post("/convert", (req, res) => {
  const markdown = req.body;
  const html = md.render(markdown);
  const docx = htmlDocx.asBlob(html);

  res.setHeader("Content-Disposition", "attachment; filename=archivo.docx");
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  res.send(docx);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
