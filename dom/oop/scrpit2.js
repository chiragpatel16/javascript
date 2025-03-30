class Animals {

    #name;
    #type;
    #gender;
    #age;

    set(name, type, gender, age) {
        this.#name = name;
        this.#type = type;
        this.#gender = gender;
        this.#age = age;
    }

    print() {
            document.writeln(this.#name),
            document.writeln  (this.#type),
            document.writeln (this.#gender), 
            document.writeln(this.#age);
    }

};

const animal1 = new Animals();
animal1.set('Mufasa', 'Lion', 'Male', '15 <br>');
animal1.print();

const animal2 = new Animals();
animal2.set('Jumbo', 'Elephant', 'male', '10');
animal2.print();