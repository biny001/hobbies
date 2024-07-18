import Content from "@/components/Activities/content";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className=" flex  flex-col   lg:justify-center lg:items-start  items-center justify-center space-y-2  px-2 py-2 mb-3    ">
        <h1 className="text-4xl font-bold">Activity Settings</h1>
        <p className=" text-muted-foreground  ">Modify activity details</p>
      </div>
      <Content params={params.id} />
    </>
  );
};

export default page;
