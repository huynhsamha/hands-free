(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1:function(t,e,n){"use strict";n.d(e,"d",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c});var a=n(2);function s(t=(()=>{})){$("#loading").css("display","block"),setTimeout(()=>t(),400)}function o(){$("#loading").css("display","none")}function r(t){o(),setTimeout(()=>Object(a.b)(t),100)}function c(t){o(),setTimeout(()=>Object(a.b)(t.responseJSON),100)}},13:function(t,e,n){"use strict";var a=n(10),s=n.n(a),o=n(8),r=n.n(o),c=n(1),i=n(2);let l=!1;const u=()=>l;function d(){window.innerWidth>991&&l&&h()}function h(){$(".page_menu");var t=$(".page_menu_content");TweenMax.to(t,.3,{height:0}),l=!1}var g=n(7),j=n(5),m=n(4),f=n(9);$("#btn-modal-forgot").click(()=>{Object(c.d)(),setTimeout(()=>{Object(c.c)(),Object(i.c)("Đã gửi đường dẫn thay đổi mật khẩu tới địa chỉ email của bạn. Vui lòng kiểm tra email.",()=>{$("#js-modal-forgot").modal("hide")})},500)}),$("#btn-modal-login").click(()=>{const t=$("#loginEmail").val(),e=$("#loginPassword").val();if(!s.a.isEmail(t))return alert("Địa chỉ email không hợp lệ");const n=`${m.a.baseUrl}/api/auth/login.php`;Object(c.d)(()=>{$.post(n,r.a.stringify({email:t,password:e}),t=>{Object(c.c)(),console.log(t);const{issuedAt:e,token:n,tokenExpire:a,user:s}=t;Object(j.f)(s,n,a,e),window.location.reload()}).fail(t=>Object(c.a)(t.responseJSON))})}),$("#btn-modal-signup").click(()=>{const t=$("#signUpEmail").val().toLowerCase(),e=$("#signUpFirstName").val(),n=$("#signUpLastName").val(),a=$("#signUpTel").val(),o=$("#signUpAddress").val(),l=$("#signUpPassword").val(),u=$("#signUpConfirm").val();if([t,e,n,a,o,l].reduce((t,e)=>t||0==e.length,!1))return alert("Vui lòng điền đầy đủ thông tin.");if(!s.a.isEmail(t))return alert("Địa chỉ email không hợp lệ.");if(!Object(f.a)(l))return alert("Mật khẩu yêu cầu tối thiểu 8 ki tự, trong đó ít nhất 1 kí tự hoa, 1 kí tự thường, 1 số và 1 kí tự đặc biệt.");if(l!==u)return alert("Mật khẩu không khớp.");const d=`${m.a.baseUrl}/api/auth/signup.php`,h={email:t,firstName:e,lastName:n,tel:a,address:o,password:l};Object(c.d)(()=>{$.post(d,r.a.stringify(h),t=>{Object(c.c)(),console.log(t),Object(i.c)("Đăng kí tài khoản thành công.",()=>{$("#js-modal-signup").modal("hide")})}).fail(t=>Object(c.a)(t.responseJSON))})}),$("#headerLogout").find("a").click(()=>{Object(j.a)(),window.location.reload()}),Object(j.d)(t=>{if(t){console.log("Logined");const{user:e,token:n}=t;console.log(e),$("#headerLogin").hide(),$("#headerSignUp").hide()}else console.log("No login"),$("#headerProfile").hide(),$("#headerLogout").hide()}),d(),function(){var t,e;$(".custom_dropdown_placeholder").length&&$(".custom_list").length&&(t=$(".custom_dropdown_placeholder"),e=$(".custom_list")),t.on("click",t=>{e.hasClass("active")?e.removeClass("active"):e.addClass("active"),$(document).one("click",function t(n){$(n.target).hasClass("clc")?$(document).one("click",t):e.removeClass("active")})}),$(".custom_list a").on("click",function(n){n.preventDefault(),$(this).parent().index(),t.text($(this).text()).css("opacity","1"),e.hasClass("active")?e.removeClass("active"):e.addClass("active")}),$("select").on("change",function(e){t.text(this.value),$(this).animate({width:`${t.width()}px`})})}(),$(".page_menu").length&&$(".page_menu_content").length&&($(".page_menu"),$(".page_menu_content"),$(".menu_trigger").on("click",()=>{u()?h():function(){$(".page_menu");var t=$(".page_menu_content");TweenMax.set(t,{height:"auto"}),TweenMax.from(t,.3,{height:0}),l=!0}()}),$(".page_menu_item").length&&$(".page_menu_item").each(function(){var t=$(this);t.hasClass("has-children")&&t.on("click",e=>{e.preventDefault(),e.stopPropagation();var n=t.find("> ul");n.hasClass("active")?(n.toggleClass("active"),TweenMax.to(n,.3,{height:0})):(n.toggleClass("active"),TweenMax.set(n,{height:"auto"}),TweenMax.from(n,.3,{height:0}))})})),Object(g.c)(),Object(g.d)(),$(window).on("resize",()=>{d()})},2:function(t,e,n){"use strict";function a(t,e=(()=>{})){$.confirm({title:"Thông báo",icon:"fa fa-bell",type:"green",content:t,buttons:{ok:{text:"OK",btnClass:"btn-green",action(){e()}}}})}function s(t,e=(()=>{})){$.confirm({title:"Lỗi",icon:"fa fa-exclamation-triangle",type:"red",content:t,buttons:{ok:{text:"OK",btnClass:"btn-red",action(){e()}}}})}function o(t,e,n,a=(()=>{}),s=(()=>{})){$.confirm({title:"Thông báo",icon:"fa fa-bell",type:"green",content:t,buttons:{ok:{text:e,btnClass:"btn-green",action(){a()}},cancel:{text:n,action(){s()}}}})}function r(t,e,n,a=(()=>{}),s=(()=>{})){$.confirm({title:"Cảnh báo",icon:"fa fa-exclamation-triangle",type:"red",content:t,buttons:{ok:{text:e,btnClass:"btn-red",action(){a()}},cancel:{text:n,action(){s()}}}})}function c(t,e,n,a=(()=>{}),s=(()=>{})){$.confirm({title:"Thông báo",icon:"fa fa-question-circle",type:"orange",content:t,buttons:{ok:{text:e,btnClass:"btn-orange",action(){a()}},cancel:{text:n,action(){s()}}}})}n.d(e,"c",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return r}),n.d(e,"e",function(){return c})},238:function(t,e,n){"use strict";n.r(e);n(239),n(241);var a=n(8),s=n.n(a),o=n(0),r=n.n(o),c=n(5),i=(n(13),n(1)),l=n(2),u=n(4),d=n(9),h=n(6);(()=>{let t={};0==Object(c.e)()&&(window.location.pathname="");const e=$("#user-avatar"),n=$("#input-user-avatar");let a;e.click(()=>{$("#input-user-avatar").click()}),n.on("change",function(t){a=t.target.files,console.log(a),function(t){if(t.files&&t.files[0]){var n=new FileReader;n.onload=function(t){e.attr("src",t.target.result)},n.readAsDataURL(t.files[0])}}(this)});const o=()=>{t=Object(c.c)(),$("#email").val(t.email),$("#firstName").val(t.firstName),$("#lastName").val(t.lastName),$("#tel").val(t.tel),$("#address").val(t.address);let n=t.photoUrl;Object(d.b)(t.photoUrl)&&(n=`${u.a.baseUrl}/${t.photoUrl}`),e.attr("src",n)};$(".form-avatar").on("submit",e=>{if(e.stopPropagation(),e.preventDefault(),!a)return Object(l.b)("Vui lòng chọn một ảnh khác để thay thế ảnh đại diện hiện tại.");Object(i.d)(()=>{const e=new FormData;$.each(a,(t,n)=>{console.log(t,n),e.append("avatar",n)}),console.log(e),$.ajax({url:`${u.a.baseUrl}/api/upload/avatar.php`,type:"POST",data:e,cache:!1,dataType:"json",headers:{Authorization:Object(c.b)()},processData:!1,contentType:!1,success(e){console.log(e),t.photoUrl=e.url,Object(c.g)(t),Object(i.c)(),Object(l.c)("Ảnh đại diện đã được cập nhật.")}}).fail(t=>Object(i.b)(t))})}),o();const g=`${u.a.baseUrl}/api/user/getProfile.php`;$.ajax({url:g,type:"GET",headers:{Authorization:Object(c.b)()},success:t=>{console.log(t),Object(c.g)(t),o()}}).fail(t=>Object(i.b)(t)),$("#btnUpdateInfo").click(()=>{const e=$("#firstName").val(),n=$("#lastName").val(),a=$("#tel").val(),o=$("#address").val(),r={firstName:e,lastName:n,tel:a,address:o};if(0==e.length||0==n.length)return alert("Vui lòng điền đầy đủ thông tin họ tên.");if(0==a.length)return alert("Vui lòng điền thông tin số điện thoại");if(0==o.length)return alert("Vui lòng điền thông tin địa chỉ liên lạc");console.log(r);const d=`${u.a.baseUrl}/api/user/updateInfo.php`;Object(i.d)(()=>{$.ajax({url:d,type:"POST",headers:{Authorization:Object(c.b)()},data:s.a.stringify(r),success:s=>{Object(i.c)(),console.log(s),t.firstName=e,t.lastName=n,t.tel=a,t.address=o,Object(c.g)(t),Object(l.c)("Thông tin của bạn đã được cập nhật")}}).fail(t=>Object(i.b)(t))})}),$("#btnChangePassword").click(()=>{const t=$("#oldPassword").val(),e=$("#newPassword").val(),n=$("#confirmNewPassword").val(),a={oldPassword:t,newPassword:e};if(!Object(d.a)(e))return alert("Mật khẩu yêu cầu tối thiểu 8 ki tự, trong đó ít nhất 1 kí tự hoa, 1 kí tự thường, 1 số và 1 kí tự đặc biệt.");if(e!=n)return alert("Mật khẩu xác nhận không khớp");console.log(a);const o=`${u.a.baseUrl}/api/user/changePassword.php`;Object(i.d)(()=>{$.ajax({url:o,type:"POST",headers:{Authorization:Object(c.b)()},data:s.a.stringify(a),success:t=>{Object(i.c)(),console.log(t),Object(l.c)("Mật khẩu đã được cập nhật")}}).fail(t=>Object(i.b)(t))})});let j=[];$.ajax({url:`${u.a.baseUrl}/api/order/get.php`,type:"GET",headers:{Authorization:Object(c.b)()},success:t=>{j=t,(()=>{if(0==j.length)return $("#emptyOrders").show();$("#emptyOrders").hide();const t=$("#tbOrders tbody");j.forEach(e=>{const n=$(`\n          <tr>\n            <td class="text-center text-danger toggle-modal-order" style="cursor: pointer">\n              <i class="mr-0 fa fa-link"></i> ${e.id}\n            </td>\n            <td>${r()(e.orderTime).format("LLL")}</td>\n            <td>${function(t){return"shop_hn"==t?"Chi nhánh Quận Cầu Giấy, Hà Nội":"shop_hcm"==t?"Trụ sở Quận Tân Bình, TP.HCM":"Thanh toán tại nhà"}(e.paymentAddress)}</td>\n            <td>${function(t){return"cash"==t?"Dùng tiền mặt":"bank"==t?"Chuyển khoản ngân hàng":"Sử dụng Master Card"}(e.paymentMethod)}</td>\n            <td class="text-right">${Object(h.a)(e.totalPrice)}</td>\n            <td class="text-center">${function(t){let e="success";return"Order"==t&&(e="danger"),"Approved"==t&&(e="info"),`<span class="badge badge-pill badge-${e}">${function(t){return"Order"==t?"Đang xử lý":"Approved"==t?"Đã bắt đầu":"Đã hoàn tất"}(t)}</span>`}(e.status)}</td>\n          </tr>\n      `);t.append(n),n.find(".toggle-modal-order").click(()=>{const t={orderId:e.id};Object(i.d)(()=>{$.ajax({url:`${u.a.baseUrl}/api/order/getDetail.php?${s.a.stringify(t)}`,type:"GET",headers:{Authorization:Object(c.b)()},success:t=>{Object(i.c)(),console.log(t);const n=t,a=$("#modalOrderTable > tbody");a.html(""),n.forEach(t=>a.append($(`\n              <tr>\n                <td class="text-center">\n                  <a href="product.html?id=${t.id}" target="_blank">\n                    <img src="${t.thumbnail}" alt="Thumbnail" width="100">\n                  </a>\n                </td>\n                <td>\n                  <a href="product.html?id=${t.id}" target="_blank">\n                    ${t.name}\n                  </a>\n                </td>\n                <td class="text-right">${Object(h.a)(t.price)}</td>\n                <td> x ${t.quantity}</td>\n                <td class="text-right">${Object(h.a)(t.totalPrice)}</td>\n              </tr>`))),a.append(`\n                <tr>\n                  <td></td>\n                  <th colspan="3">Tổng tiền đơn hàng</th>\n                  <th class="text-right">${Object(h.a)(e.totalPrice)}</th>\n                </tr>\n              `),$("#modalOrderID").text(e.id),$("#js-modal-order").modal("show")}}).fail(t=>Object(i.b)(t))})})})})()}}).fail(t=>Object(i.b)(t))})()},239:function(t,e,n){},241:function(t,e,n){},243:function(t,e,n){var a={"./af":36,"./af.js":36,"./ar":37,"./ar-dz":38,"./ar-dz.js":38,"./ar-kw":39,"./ar-kw.js":39,"./ar-ly":40,"./ar-ly.js":40,"./ar-ma":41,"./ar-ma.js":41,"./ar-sa":42,"./ar-sa.js":42,"./ar-tn":43,"./ar-tn.js":43,"./ar.js":37,"./az":44,"./az.js":44,"./be":45,"./be.js":45,"./bg":46,"./bg.js":46,"./bm":47,"./bm.js":47,"./bn":48,"./bn.js":48,"./bo":49,"./bo.js":49,"./br":50,"./br.js":50,"./bs":51,"./bs.js":51,"./ca":52,"./ca.js":52,"./cs":53,"./cs.js":53,"./cv":54,"./cv.js":54,"./cy":55,"./cy.js":55,"./da":56,"./da.js":56,"./de":57,"./de-at":58,"./de-at.js":58,"./de-ch":59,"./de-ch.js":59,"./de.js":57,"./dv":60,"./dv.js":60,"./el":61,"./el.js":61,"./en-au":62,"./en-au.js":62,"./en-ca":63,"./en-ca.js":63,"./en-gb":64,"./en-gb.js":64,"./en-ie":65,"./en-ie.js":65,"./en-il":66,"./en-il.js":66,"./en-nz":67,"./en-nz.js":67,"./eo":68,"./eo.js":68,"./es":69,"./es-do":70,"./es-do.js":70,"./es-us":71,"./es-us.js":71,"./es.js":69,"./et":72,"./et.js":72,"./eu":73,"./eu.js":73,"./fa":74,"./fa.js":74,"./fi":75,"./fi.js":75,"./fo":76,"./fo.js":76,"./fr":77,"./fr-ca":78,"./fr-ca.js":78,"./fr-ch":79,"./fr-ch.js":79,"./fr.js":77,"./fy":80,"./fy.js":80,"./gd":81,"./gd.js":81,"./gl":82,"./gl.js":82,"./gom-latn":83,"./gom-latn.js":83,"./gu":84,"./gu.js":84,"./he":85,"./he.js":85,"./hi":86,"./hi.js":86,"./hr":87,"./hr.js":87,"./hu":88,"./hu.js":88,"./hy-am":89,"./hy-am.js":89,"./id":90,"./id.js":90,"./is":91,"./is.js":91,"./it":92,"./it.js":92,"./ja":93,"./ja.js":93,"./jv":94,"./jv.js":94,"./ka":95,"./ka.js":95,"./kk":96,"./kk.js":96,"./km":97,"./km.js":97,"./kn":98,"./kn.js":98,"./ko":99,"./ko.js":99,"./ky":100,"./ky.js":100,"./lb":101,"./lb.js":101,"./lo":102,"./lo.js":102,"./lt":103,"./lt.js":103,"./lv":104,"./lv.js":104,"./me":105,"./me.js":105,"./mi":106,"./mi.js":106,"./mk":107,"./mk.js":107,"./ml":108,"./ml.js":108,"./mn":109,"./mn.js":109,"./mr":110,"./mr.js":110,"./ms":111,"./ms-my":112,"./ms-my.js":112,"./ms.js":111,"./mt":113,"./mt.js":113,"./my":114,"./my.js":114,"./nb":115,"./nb.js":115,"./ne":116,"./ne.js":116,"./nl":117,"./nl-be":118,"./nl-be.js":118,"./nl.js":117,"./nn":119,"./nn.js":119,"./pa-in":120,"./pa-in.js":120,"./pl":121,"./pl.js":121,"./pt":122,"./pt-br":123,"./pt-br.js":123,"./pt.js":122,"./ro":124,"./ro.js":124,"./ru":125,"./ru.js":125,"./sd":126,"./sd.js":126,"./se":127,"./se.js":127,"./si":128,"./si.js":128,"./sk":129,"./sk.js":129,"./sl":130,"./sl.js":130,"./sq":131,"./sq.js":131,"./sr":132,"./sr-cyrl":133,"./sr-cyrl.js":133,"./sr.js":132,"./ss":134,"./ss.js":134,"./sv":135,"./sv.js":135,"./sw":136,"./sw.js":136,"./ta":137,"./ta.js":137,"./te":138,"./te.js":138,"./tet":139,"./tet.js":139,"./tg":140,"./tg.js":140,"./th":141,"./th.js":141,"./tl-ph":142,"./tl-ph.js":142,"./tlh":143,"./tlh.js":143,"./tr":144,"./tr.js":144,"./tzl":145,"./tzl.js":145,"./tzm":146,"./tzm-latn":147,"./tzm-latn.js":147,"./tzm.js":146,"./ug-cn":148,"./ug-cn.js":148,"./uk":149,"./uk.js":149,"./ur":150,"./ur.js":150,"./uz":151,"./uz-latn":152,"./uz-latn.js":152,"./uz.js":151,"./vi":153,"./vi.js":153,"./x-pseudo":154,"./x-pseudo.js":154,"./yo":155,"./yo.js":155,"./zh-cn":156,"./zh-cn.js":156,"./zh-hk":157,"./zh-hk.js":157,"./zh-tw":158,"./zh-tw.js":158};function s(t){var e=o(t);return n(e)}function o(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(a)},s.resolve=o,t.exports=s,s.id=243},4:function(t,e,n){"use strict";n.d(e,"a",function(){return a});const a={baseUrl:"http://api.hands-free.epizy.com"}},5:function(t,e,n){"use strict";function a(t,e,n,a){localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("token",e),localStorage.setItem("tokenExpire",n),localStorage.setItem("issuedAt",a)}function s(){["user","token","tokenExpire","issuedAt"].forEach(t=>{localStorage.removeItem(t)})}function o(){return localStorage.getItem("token")}function r(){return JSON.parse(localStorage.getItem("user"))}function c(t){localStorage.setItem("user",JSON.stringify(t))}function i(t){const e=JSON.parse(localStorage.getItem("user")),n=localStorage.getItem("token"),a=localStorage.getItem("tokenExpire");if(!e||!e.email||!n||!a||1e3*a<Date.now())return s(),t();t({user:e,token:n})}function l(){const t=JSON.parse(localStorage.getItem("user")),e=localStorage.getItem("token"),n=localStorage.getItem("tokenExpire");return t&&t.email&&e&&n&&!(1e3*n<Date.now())?{user:t,token:e}:(s(),!1)}n.d(e,"f",function(){return a}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"g",function(){return c}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return l})},6:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n(12),s=n.n(a);function o(t){return`${s()(t).format("0,0")} đ`}},7:function(t,e,n){"use strict";n.d(e,"g",function(){return s}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return i}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return u}),n.d(e,"f",function(){return d}),n.d(e,"b",function(){return h});var a=n(6);const s=t=>t.reduce((t,e)=>t+Number.parseInt(e.price,10)*e.quantity,0),o=t=>Object(a.a)(s(t)),r=t=>t.reduce((t,e)=>t+e.quantity,0),c=()=>{const t=$(".cart_count span"),e=$(".cart_price"),n=JSON.parse(localStorage.getItem("cart")||"[]");t.text(r(n)),e.text(o(n))},i=()=>{const t=$(".wishlist_count"),e=JSON.parse(localStorage.getItem("wishlist")||"[]");t.text(e.length)},l=(t,e=1)=>{const n=$(".cart_count span"),a=$(".cart_price"),s=JSON.parse(localStorage.getItem("cart")||"[]");console.log("Add cart:",t);const{id:c,brandName:i,modelId:l,modelName:u,name:d,price:h,thumbnail:g}=t,j=s.findIndex(t=>t.id==c);j>-1?s[j].quantity+=e:s.push({quantity:e,id:c,brandName:i,modelId:l,modelName:u,name:d,price:h,thumbnail:g}),n.text(r(s)),a.text(o(s)),localStorage.setItem("cart",JSON.stringify(s))},u=t=>{const e=$(".cart_count span"),n=$(".cart_price"),a=JSON.parse(localStorage.getItem("cart")||"[]");console.log("Remove cart:",t);const{id:s,brandName:c,modelId:i,modelName:l,name:u,price:d,thumbnail:h}=t,g=a.findIndex(t=>t.id==s);g>-1?(a[g].quantity--,0==a[g].quantity&&a.splice(g,1)):console.log("Item not found"),e.text(r(a)),n.text(o(a)),localStorage.setItem("cart",JSON.stringify(a))},d=()=>JSON.parse(localStorage.getItem("cart")||"[]"),h=()=>{localStorage.removeItem("cart")}},9:function(t,e,n){"use strict";function a(t){return t&&/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(t)}function s(t){return t&&/^uploads\/.*$/.test(t)}n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})}},[[238,1,0]]]);