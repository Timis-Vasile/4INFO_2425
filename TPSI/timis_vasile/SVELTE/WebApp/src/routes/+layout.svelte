<style>
    :global(body) {
        margin: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        height: 100vh;
        box-sizing: border-box;
        color:white;
    }

    header {
        background-color:#023e8a;
        text-align: center;
    }
    section {
        display: flex;
        flex-direction: row;
        flex:10;
    }
    nav {
        background-color: #0077b6;
        flex:1;

    }
    div {
        border:4px;
        border-color: greenyellow;
        padding: 20px;

    }
    nav ul {
        list-style: none;
    }
    nav ul li a {
        color: white;
        text-decoration: none;
        font-size: 30px;
        font-weight: bolder;

    }
    article {
        color: #03045e;
        border-color: greenyellow;
        border:2px;
        padding: 20px;
        font-size: 30px;
        flex:8;
    }

    footer {
        background-color: #03045e;
        text-align: center;
        font-size: 20px;
        flex:1;
    }


</style>



<main>
    <header>
        <h1>Web App</h1>
    </header>
    <section>
        <nav>
            <ul>
                <li><a href="/chi_sono">Chi sono</a></li>
                <li><a href="#">Counter</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
        <article>
            <div>
            <slot/>
        
            </div>
        </article>
    </section>

    <footer>
        <h4> Copyright &copy; Vasile Timis</h4>
    </footer>

</main>

