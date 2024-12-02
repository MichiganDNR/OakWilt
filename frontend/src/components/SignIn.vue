<!-- eslint-disable prettier/prettier -->
 <template>
    <div class="container">
        <header class="header">
            <h1>DNR Oak Wilt</h1>
        </header>
      <div class="form-wrapper">
        <h1>Sign In</h1>
        <form @submit.prevent="signIn">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email address"
            required
          />
          <input
            type="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      signIn() {
        this.$router.push('/upload-images');
        console.log("Button clicked!", this.email, this.password);
        // Add your sign-in logic here
      },
    },
  };
  </script>
<!-- eslint-disable prettier/prettier -->
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }

  .header {
    text-align: center;
    margin-bottom: 2em;
  }
  
  .form-wrapper {
    background-color: #f6e7a3;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 1.5em;
    color: #333;
  }
  
  input {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 1.0em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  input:focus {
    border-color: #42b983;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #36a072;
  }
  
  .footer-text {
    margin-top: 1em;
    font-size: 0.9em;
    color: #555;
  }
  
  .footer-text a {
    color: #42b983;
    text-decoration: none;
  }
  
  .footer-text a:hover {
    text-decoration: underline;
  }
  </style>
<!-- eslint-disable prettier/prettier -->