import ListPage from "./item";

const List = () => {
  const MOCKLIST = [
    {
      title: "1",
      content: "example-1",
    },
    {
      title: "2",
      content: "example-2",
    },
    {
      title: "3",
      content: "example-3",
    },
  ];
  // console.log(MOCKLIST);
  return (
    <>
      {MOCKLIST.map((mock) => (
        <ListPage mock={mock} key={mock} MOCKLIST={MOCKLIST} />
      ))}
    </>
  );
};
export default List;
