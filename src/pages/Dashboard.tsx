export const Dashboard = () => {
  return (
    <>
      <div className="flex h-full w-full relative">
        <main className="flex flex-col h-full w-full">
          <div className="w-full h-full bg-gray-50">
            <div
              style={{ border: "1px solid #e0e0e0" }}
              className="flex flex-col h-full rounded-md bg-white"
            >
              <div className="space-x-4 border px-5 py-5 pb-0">
                <div className="overflow-auto ">
                  <div className="flex gap-4">
                    <button className="p-10 border border-solid">1</button>
                    <button className="p-10 border border-solid">2</button>
                    <button className="p-10 border border-solid">3</button>
                    <button className="p-10 border border-solid">4</button>
                    <button className="p-10 border border-solid">5</button>
                    <button className="p-10 border border-solid">6</button>
                    <button className="p-10 border border-solid mr-">7</button> {/* Agregar margen derecho */}
                  </div>
                  <div className="flex-1 h-full overflow-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt, iure a!</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
