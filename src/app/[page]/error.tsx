"use client"

type Props = {
  error: Error,
  reset: () => void,
};

const Error = (props: Props) => {
  const reload = () => location.reload();

  return (
    <section className="bg-white p-8 mb-12">
      <h2 className="font-bold text-3xl mb-8">エラー</h2>
      <p className="mb-8">
        データ取得中にエラーが生じました。<br />
        少し時間を空けてから、再度お試しください。
      </p>
      <p className="bg-gray-200 p-8 mb-8">
        {props.error.message}
      </p>
      <div className="flex justify-center items-center">
        <button onClick={reload} className="bg-red-600 text-white w-24 h-10 rounded-lg">再読み込み</button>
      </div>
    </section>
  );
};

export default Error;
