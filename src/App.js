import React from "react";
import "./App.css";

const App = () => {
  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy: " + err);
      });
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <button onClick={() => copyToClipboard(`<head> \n<script> \nfunction validateForm() \n{ \nvar x = document.list.name.value; \nif (x==null || x==' ')  \n{ \nalert('Please enter the name'); \ndocument.list.name.focus(); \nreturn false; \n} \n} \n</script> \n</head>`) }>
        Sub01
      </button>
      <button onClick={() => copyToClipboard(`import java.util.Scanner; \n\npublic class ScannerExample { \n    public static void main(String args[]) { \n        Scanner kbinput = null; \n        int number1, number2, sum = 0; \n\n        try { \n            kbinput = new Scanner(System.in); \n\n            System.out.print('Enter the First No.: '); \n            number1 = kbinput.nextInt(); \n\n            System.out.print('Enter the Second No.: '); \n            number2 = kbinput.nextInt(); \n\n            sum = number1 + number2; \n            System.out.println('Sum is: ' + sum); \n        } catch (Exception e) { \n            System.out.println('Error: ' + e.getMessage()); \n        } finally { \n            if (kbinput != null) { \n                kbinput.close(); \n            } \n        } \n    } \n}`) }>
        Sub02
      </button>
      <button onClick={() => copyToClipboard(`\\documentclass [12pt] {article} \n\\usepackage fams mathy \n\\setlength {\\parindent Opt \nI title {Introduction to Latex} \nI date $ 2025) \n\\begin{ documenty} \nbegin {mathy} \n\\frac {x}{4} [6pt] \n\\sqrt {b} [6pt] \n\\frac {\\frac {1}{3}+\\frac{3}{2}} {\\frac {2} {3}+ \\frac {1}{2}}\\\\[6] \n\n\\sqrt {1+ \\frac {1}{\\sqrt {1+\\frac {1} {\\sqrt {1+\\frac {1}{2}}}}}>>> [6P] (\\frac {x_1+x_2}{12}), \\frac{y_1+4_242) \nlend { mathy} \n\\end{ document>`) }>
        Sub03
      </button>
    </div>
  );
};

export default App;
