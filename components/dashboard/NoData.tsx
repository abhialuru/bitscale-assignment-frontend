function NoData({ title }: { title: string }) {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">No data available yet.</p>
      </div>
    </section>
  );
}

export default NoData;
