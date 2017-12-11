<template lang="pug">
  section.sectionContact.blue
    .container
      .row
        .col-sm-6
          h2 Contact us
          hr
          p Feel free to contact us for any questions,  recommendations, speaking engagements, and inquiries about sponsorship and partnership.
          .infos.container-fluid
            .email.row 
              .col-xs-2.col-label Email
              .col-xs-10.col-text info@n3xtcon.com
            .call.row 
              .col-xs-2.col-label Call
              .col-xs-10.col-text (213) 536-1923
          
        .col-sm-6
          form.form-group#form_contact
            input.form-control(placeholder="Name" name="name" required)
            input.form-control(placeholder="Email" name="email" required ,pattern=".*@.*..*")
            textarea.form-control(placeholder="Message", name="message", rows="1" , required)
            
            .btn.red(v-if="!sending" , @click="send_form") Send
            .btn.red(v-if="sending") Sending....
</template>

<script>
export default {
  methods: {
    send_form(){
      var vobj=this;
      var send_data_array=$("#form_contact").serializeArray();
      var send_data = {};
      send_data_array.forEach((obj)=>{
        send_data[obj.name]=obj.value
      })
      // var send_data=$("#form_contact").submit();
      console.log(send_data);

      this.sending=true;
      axios.post("/contact",send_data).then((res)=>{
        if (res.data.status=="success"){
          alert("Success! ")
          setTimeout(()=>{
            vobj.sending=false;
          },1000)

        }else{

          alert("Send Fail...")
        }
      });

    },
  }
}
</script>

<style>

</style>
