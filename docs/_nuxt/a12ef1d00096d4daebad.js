(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{215:function(e,t,r){var content=r(219);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(64).default)("5a4d3b79",content,!0,{sourceMap:!1})},218:function(e,t,r){"use strict";var n=r(215);r.n(n).a},219:function(e,t,r){(t=r(63)(!1)).push([e.i,".people[data-v-4183bd80]{display:-webkit-box;display:flex;border:1px solid #cdcdcd;border-radius:2px;margin-bottom:12px;-webkit-box-align:center;align-items:center}.people div[data-v-4183bd80]{padding:12px}.people div p[data-v-4183bd80]{margin-bottom:0}.people button.text-danger[data-v-4183bd80]:hover{background-color:#ffe9ed}.people button.text-info[data-v-4183bd80]:hover{background-color:#ecfbfb}",""]),e.exports=t},225:function(e,t,r){"use strict";r.r(t);r(17);var n={name:"AddDate",data:function(){return{savedDates:{},loggedIn:!1,date:null}},methods:{addDate:function(){var e=this;this.loggedIn&&this.$fireStore.collection("dates").add({newTempDate:new Date(this.date.replace(/-/g,"/"))}).then((function(){console.log("Date added to Firebase"),e.date=null})).catch((function(e){console.error("Error writing document: ",error)}))}},created:function(){var e=this;this.$fireAuth.onAuthStateChanged((function(t){t?(e.loggedIn=!0,e.$fireStore.collection("dates").orderBy("newTempDate").onSnapshot((function(t){e.savedDates=[],t.docs.forEach((function(t){var r=t.data();r.id=t.id,e.savedDates.push(r)}))}),(function(e){console.log(e.message)}))):(e.loggedIn=!1,console.log("No one is logged in."))}))}},o=r(31),d=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loggedIn?r("div",{staticClass:"alert alert-warning mt-4"},[r("h3",[e._v("Add Date (Just for fun)")]),e._v(" "),r("form",{staticClass:"mb-3",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.addDate(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"add-date"}},[e._v("Pick Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date",id:"add-date",required:""},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[e._v("Submit Date")])]),e._v(" "),e._l(e.savedDates,(function(t){return r("p",{key:t.id},[e._v("\n      "+e._s(new Date(1e3*t.newTempDate.seconds))+"\n    ")])}))],2):r("div",{staticClass:"alert alert-danger mt-4"},[e._v("\n    There are no users signed in. Please "),r("nuxt-link",{staticClass:"text-danger",attrs:{to:"/firebase/auth"}},[r("u",[e._v("sign in")])]),e._v(" to view the data.\n  ")],1)])}),[],!1,null,null,null).exports,c=(r(24),{data:function(){return{add:{}}},methods:{addPerson:function(){var e=this;this.$fireStore.collection("people").add({name:this.add.name,age:parseInt(this.add.age)}).then((function(){e.add.name="",e.add.age=""})).catch((function(e){console.error("Error writing document: ",error)}))}}}),l=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{id:"add-person"},on:{submit:function(t){return t.preventDefault(),e.addPerson(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"add-name"}},[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.name,expression:"add.name"}],staticClass:"form-control",attrs:{type:"text",id:"add-name",required:""},domProps:{value:e.add.name},on:{input:function(t){t.target.composing||e.$set(e.add,"name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"add-age"}},[e._v("Age")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.add.age,expression:"add.age"}],staticClass:"form-control",attrs:{type:"number",id:"add-age",required:""},domProps:{value:e.add.age},on:{input:function(t){t.target.composing||e.$set(e.add,"age",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Add Person")])])}),[],!1,null,null,null).exports,v=(r(6),r(4),r(3),r(1),r(5),r(0));function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={name:"HarryPotterCharacter",props:["character"],data:function(){return{selectedUser:""}},methods:{deletePerson:function(e){this.$fireStore.collection("people").doc(e).delete()},openEditModal:function(){this.selectedUser=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.character),this.$bvModal.show("character-".concat(this.character.id))},editPerson:function(e){var t=this;this.$fireStore.collection("people").doc(e).update({name:this.selectedUser.name,age:parseInt(this.selectedUser.age)}).then((function(){console.log("Document successfully updated!"),t.$bvModal.hide("character-".concat(t.character.id))})).catch((function(e){console.error("Error updating document: ",e),t.$bvModal.hide("character-".concat(t.character.id))}))}}},h=(r(218),{components:{AddDate:d,AddHarryPotterCharacter:l,HarryPotterCharacter:Object(o.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"people",attrs:{"data-id":e.character.id}},[r("img",{attrs:{src:"https://placehold.it/100",alt:"portrait of "+e.character.name}}),e._v(" "),r("div",[r("h4",[e._v(e._s(e.character.name))]),e._v(" "),r("p",[e._v(e._s(e.character.age)+" years old")])]),e._v(" "),r("div",{staticClass:"ml-auto"},[r("button",{staticClass:"mx-1 btn btn-link text-info",on:{click:function(t){return e.openEditModal()}}},[e._m(0)]),e._v(" "),r("button",{staticClass:"mx-1 btn btn-link text-danger",on:{click:function(t){return e.deletePerson(e.character.id)}}},[e._m(1)])])]),e._v(" "),r("b-modal",{attrs:{id:"character-"+e.character.id,"hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[e._v("\n      Update Person\n      "),r("span",{staticClass:"small text-muted"},[e._v(e._s(e.selectedUser.id))])]},proxy:!0}])},[e._v(" "),r("div",{staticClass:"d-block"},[r("form",{attrs:{id:"edit-person"},on:{submit:function(t){return t.preventDefault(),e.editPerson(e.selectedUser.id)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"add-name"}},[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.name,expression:"selectedUser.name"}],staticClass:"form-control",attrs:{type:"text",id:"add-name",required:""},domProps:{value:e.selectedUser.name},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"name",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"add-age"}},[e._v("Age")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.age,expression:"selectedUser.age"}],staticClass:"form-control",attrs:{type:"text",id:"add-age",required:""},domProps:{value:e.selectedUser.age},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"age",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Update")]),e._v(" "),r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(t){return e.$bvModal.hide("edit-person-modal")}}},[e._v("\n          Cancel\n        ")])])])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("i",{staticClass:"fas fa-pencil-alt"},[t("span",{staticClass:"sr-only"},[this._v("Edit")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("i",{staticClass:"fas fa-trash"},[t("span",{staticClass:"sr-only"},[this._v("Delete")])])}],!1,null,"4183bd80",null).exports},name:"FirebaseFirestore",data:function(){return{message:"Hello Nuxt-Fire",files:[]}},created:function(){var e=this;this.$fireStore.collection("people").orderBy("age").onSnapshot((function(t){e.files=[],t.docs.forEach((function(t){var r=t.data();r.id=t.id,e.files.push(r)}))}),(function(e){console.log(e.message)}))}}),_=Object(o.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("h1",[e._v(e._s(e.message))]),e._v(" "),r("p",{staticClass:"lead"},[e._v("\n        This is a simple CRUD (Create, Read, Update, Delete) operation made\n        from Nuxt and Firebase\n      ")])]),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("h2",[e._v("Add Character")]),e._v(" "),r("AddHarryPotterCharacter"),e._v(" "),r("AddDate")],1),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("h2",[e._v("Harry Potter Characters")]),e._v(" "),e._l(e.files,(function(e){return r("div",{key:e.id},[r("HarryPotterCharacter",{attrs:{character:e}})],1)}))],2)])])}),[],!1,null,"54d6bc30",null);t.default=_.exports}}]);