export default function Log({log}) {
    return (
      <ol id={"log"}>
          {log.map((entry, index) => {
              return <li key={index}>{entry}</li>;
          })}
      </ol>
    );
}