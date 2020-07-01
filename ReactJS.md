# 1. Tạo React App

- npx create-react-app tên dự án
- npm init react-app tên dự án

# 2. Xem kết quả dự án trên trình duyệt

- yarn start
- npm start

# 3. Build dự án

- yarn build
- npm run build

# 4. Cài đặt Chrome Extension

- React Developer Tools
- Redux DevTools
- ES7 React/Redux/GraphQL/React-Native snippets

# 5. JSX : viết code HTML trong JavaScript

- HTML to JSX Compiler : https://magic.reactjs.net/htmltojsx.htm
- Phải có một cặp thẻ lớn bao bọc toàn bộ các thẻ còn lại
- class thành className, for thành htmlFor
- nếu là thẻ đơn thì phải có dấu / đóng
- đưa biến, hàm số vào trong code HTML bằng {}
- thêm style CSS qua thuộc tính style={biến_chứa_code_CSS} - cách viết : font-size thành fontSize
- có thể viết bằng cách khác như sau style={{color: "#333"}}

# 6 - Sử dụng toán tử 3 ngôi

- value === true ? "true" : "false"

# 7 - Sử dụng map

- arr.map((value)=>{code});

# 8 - Thêm thư Bootstrap vào dự án

- tải Bootstrap và jQuery về
- đưa file jQuery vào trong thư mục js
- đưa thư mục css và js vào trong thư mục public
- Nhúng link vào trong file index.html trong thư mục public
  --> <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.min.css" />

# 9 - Tạo Component

- C1 : function Welcome(props){
return (<div>
<h1>ReactJS</h1>
</div>);
}
- C2 : class Welcome extends Component {
render() {
return (<div>
<h1>ReactJS</h1>
</div>);
}
}

# 10. Gọi Component

- C1 : <Welcome title={"Hello World"}/>
- C2 : <Welcome>This is sample text</Welcome>

# 11. Vị trí tạo biến và hàm

- Thêm hàm số ngoài hàm render()
- Thêm biến trong hàm render()

class Hello extends Component {
constructor (props) {
super(props);
}
newFunction() {
code
}
render() {
let myStyle = {
code
}
return <p style={myStyle}>{this.newFunction}</p>
}
}

# 12. Props

- Sử dụng giá trị bên ngoài
- Không thể thay đổi giá giá trị
- this.props.value : <Hello value="" />
- this.props.children : <Welcome>This is sample text</Welcome>

# - Sử dụng defaultProps, propTypes

- Thay vì truyền giá trị prop trong component như ở trên chúng ta có thể truyền trong class như sau :
- khai báo ngoài render() và trong class
  static defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
  };

- Quy định kiểu dữ liệu của prop
- khai báo ngoài render() và trong class
  static propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  };

- Cách khai báo hoàn toàn tương tự như thông thường
  <i className={this.props.icon} />
  {this.props.title}

# Cách viết ngắn gọn khi truyền giá trị của prop

- Khai báo trong render()
  const { title, icon } = this.props;

<h1>
  <i className={icon} />
  {title}
</h1>

# 13. State

- Sử dụng giá trị bên trong class
- Có thể thay đổi giá trị

class Hello extends Component {
constructor (props) {
super(props);
this.state = {
msg : "Hello Component",
};
}

render() {
return <p>{this.state.msg}</p>
}
}

# Cách viết ngắn gọn khi truyền giá trị của prop

- Khai báo trong render()
  const { msg } = this.state;

<p>{msg}</p>

# Thay đổi giá trị State

class Hello extends Component {
constructor (props) {
super(props);
this.state = {
msg : "Hello Component",
};
let timer = setInterval(() => {
this.setState((state)=>({
msg : state.msg + "!!!"
}));
},1000);
}

render() {
return <p style={this.props.style}>{this.state.msg}</p>
}
}

# 14. Hàm số có tham số

- C1 : onClick={() => this.OnState()}

- C2 : OnState = () => {
  this.setState({
  isActive: false,
  });
  };

- C3 : thêm dòng này trong constructor : this.OnState = this.OnState.bind(this);

# 15. Lấy dữ liệu input...vv

<input className="form-control" type="text" placeholder="Default input"
ref="data"> </input>

alert(this.refs.data.value);

# 16. Import - Export

- class Test extends Component {}
  export default Test;

- import Test from "./components/Test";

# 17. Sử dụng Context

- Khai báo biến ngoài class
  let data = {
  title: "Title",
  message: "this is sample message",
  };

- Truyền giá trị biến vào cho biến mới Context --> ngoài class
  const SampleContext = React.createContext(data);

- Gọi biến Context ra để chuẩn bị sử dụng
  static contextType = SampleContext;

- Sử dụng biến Context
<h2>{this.context.title}</h2>

# 18 - Thay đổi giá trị Context

- Khai báo lại giá trị biến mới trong class muốn thay đổi giá trị biến Context

let newData = {
title: "New Title",
message: "this is new sample message",
};

- Sử dụng Provider và truyền vào giá trị biến mới vừa khai báo, bọc lấy phần Component chứa biến cũ

<SampleContext.Provider value={this.newdata}>

  <Title />
  <Message />

</SampleContext.Provider>

# 19 - Cài đặt thư viện AXIOS kết nối API

- npm i axios

- import axios from "axios";

- state = {
  users: [],
  loading: false,
  };
- const res = await axios.get("https://api.github.com/users");
  this.setState({ users: res.data, loading: false });

# 20 - Cài đặt SASS

- npm i --save-dev node-sass
