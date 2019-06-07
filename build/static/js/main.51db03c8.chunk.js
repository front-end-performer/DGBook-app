(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var o=t(0),s=t.n(o),n=t(2),i=t.n(n),l=t(3),r=t(4),c=t(6),m=t(5),p=t(7),d=function(e){function a(){var e,t;Object(l.a)(this,a);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={books:t.props.books,searchKeyword:""},t.handleSearchChange=function(e){t.setState({searchKeyword:e.target.value})},t}return Object(p.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.state.books;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row mb-5"},s.a.createElement("div",{className:"col-lg-12 text-center"},s.a.createElement("h1",{className:"mt-5"},"What book will you buy today?"),s.a.createElement("p",{className:"lead"},"Here is the latest recommendations"))),s.a.createElement("div",{className:"row mb-5"},s.a.createElement("div",{className:"col-lg-12 text-center"},s.a.createElement("form",null,s.a.createElement("div",{className:"form-row"},s.a.createElement("div",{className:"col-8"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search by title",onChange:this.handleSearchChange})))))),s.a.createElement("div",{className:"row mb-5"},e.map(function(e){return s.a.createElement("div",{key:e.uid,className:"col-lg-6 col-md-6 col-s-12 mb-4"},s.a.createElement("div",{className:"card h-100"},s.a.createElement("div",{className:"card-horizontal"},s.a.createElement("div",{className:"img-wrapper"},s.a.createElement("img",{className:"img-fluid",src:e.image?e.image:"https://via.placeholder.com/316x499.jpg",alt:e.title})),s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",null,e.title),s.a.createElement("h6",null,e.author),s.a.createElement("div",{className:"card-text"},s.a.createElement("div",null,"Rating: ","".concat(e.rating,"/10")),s.a.createElement("div",null,s.a.createElement("a",{className:"btn btn-primary",href:e.link,target:"_blank",rel:"noopener noreferrer"},"Buy this")))))))})))}}]),a}(s.a.Component),g=(t(14),t(15),[{uid:76358129034,title:"Steve Jobs",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/steve-jobs.jpg?alt=media&token=6786ff2a-5724-4364-a91f-3c33355eda06",author:"Walter Isaacson",rating:8,link:"https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537/"},{uid:7582129034,title:"Zero to One",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/zero-to-one.jpg?alt=media&token=137909d3-b8c1-4b2b-b0d7-7ad917a49c4d",author:"Peter Thiel",rating:8,link:"https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296/"},{uid:7581219034,title:"A Wizard of Earthsea",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/earthsea.jpg?alt=media&token=64a99c61-e0bc-4b1d-9a80-29fe0daac3fc",author:"Ursula K. Le Guin",rating:7,link:"https://www.amazon.com/Wizard-Earthsea-Cycle/dp/0547773749/"},{uid:7581239034,title:"The Lean Startup",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/lean-startup.jpg?alt=media&token=7f442c68-3e1d-4ef1-942d-b1d000931680",author:"Eric Ries",rating:6,link:"https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898/"},{uid:7581290374,title:"Sapiens",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/sapiens.jpg?alt=media&token=a53319cc-37aa-46d9-8519-d6ce137495fa",author:"Yuval Noah Harari",rating:7,link:"https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117"},{uid:73058129034,title:"Thinking, Fast and Slow",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/thinking-fast-slow.jpg?alt=media&token=5efae718-9893-435d-b76c-7f609183c353",author:"Daniel Kahneman",rating:5,link:"https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555/"},{uid:7358129034,title:"Outliers",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/outliers.jpg?alt=media&token=782e5d34-9a6e-40c2-8ffd-8721a5c034de",author:"Malcolm Gladwell",rating:8,link:"https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930/"},{uid:7581290234,title:"1984",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/1984.jpg?alt=media&token=c4bc4a83-b5ee-430f-a54f-991947aba03a",author:"George Orwell",rating:7,link:"https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934/"},{uid:73589129034,title:"Company of One",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/company-of-one.jpg?alt=media&token=99b7f0d6-f969-4c9b-8d6b-acbd5d82ec1b",author:"Paul Jarvis",rating:7,link:"https://www.amazon.com/Company-One-Staying-Small-Business/dp/1328972356/"},{uid:73581209034,title:"The Innovator's Dilemma",image:"https://firebasestorage.googleapis.com/v0/b/bestbook-photos.appspot.com/o/the-innovators-dillema.jpg?alt=media&token=4019cbac-262c-458b-a626-6d6c8fa678f2",author:"Clayton M. Christensen",rating:6,link:"https://www.amazon.com/Innovators-Dilemma-Technologies-Management-Innovation/dp/1633691780/"}]);i.a.render(s.a.createElement(d,{books:g}),document.getElementById("root"))},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.51db03c8.chunk.js.map