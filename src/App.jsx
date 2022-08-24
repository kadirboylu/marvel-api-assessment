import Header from "@/components/Header";
import CardContainer from "@/components/CardContainer";

function App() {
  return (
    <div>
      <Header />
      <div className="heroes">
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
