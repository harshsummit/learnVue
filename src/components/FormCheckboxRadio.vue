<template>
    <div>
        <h1>Form with radio buttons and checkboxes</h1>
        <input type="text" placeholder="Enter Username" v-model="signupDetails.username" /> <br /><br />
        <input type="password" placeholder="Enter Password" v-model="signupDetails.password" /> <br /><br />
        <p>Select Your Gender</p>
        <input type="radio" value="Male" v-model="signupDetails.gender" />
        <label for="Male">Male</label>
        <br /><br />
        <input type="radio" value="Female" v-model="signupDetails.gender" />
        <label for="Female">Female</label>
        <br /><br />
        <p>Select your Hobbies</p>
        <input type="checkbox" value="Sports" v-model="signupDetails.hobbies" />
        <label for="Sports">Sports</label>
        <br /><br />
        <input type="checkbox" value="Travel" v-model="signupDetails.hobbies" />
        <label for="Travel">Travel</label>
        <br /><br />
        <input type="checkbox" value="Sleeping" v-model="signupDetails.hobbies" />
        <label for="Sleeping">Sleeping</label>
        <br /><br />
        <button v-on:click="signupUser">Sign Up</button>

    </div>

</template>

<script>
export default {
    name: 'FormCheckBoxRadio',
    data() {
        return {
            signupDetails: {
                username: null,
                password: null,
                gender: null,
                hobbies: [],
            }
        }
    },
    methods: {
        signupUser() {
            console.log('User has been signedUp', this.signupDetails)
        }
    }
}
</script>