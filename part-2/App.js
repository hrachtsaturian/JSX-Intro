const App = () => {
  return (
    <div>
      <Tweet
        username="@lacorte"
        name="Hrach Tsaturian"
        date={new Date().toDateString()}
        message="Hello World!"
      />
      <Tweet
        username="@el-pistolero"
        name="Max Bogatyrov"
        date={new Date().toDateString()}
        message="Yes Yes Yes!"
      />
      <Tweet
        username="@choo-choo"
        name="Andrii Gumeniuk"
        date={new Date().toDateString()}
        message="Meow Meow Meow Meow!"
      />
    </div>
  );
};
