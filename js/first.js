var todolist = new Vue({
    el: '#all',
    data: {
        mainDiv: {
            backcolor: '#7d2b2b',
            textColor: '#ffffff',
            borderColor: '#434343',
            borderRd: '0',
        },
        li: {
            backcolor: '#434343',
            textColor: '#ffffff',
            borderRd: '0',
        },
        btn: {
            backcolor: '#434343',
            textColor: '#ffffff',
            borderRd: '0',
        },
        newitem: '',
        isEmpty: true,
        todo: [],
        setings: false,
        isDark: false,
        fontsList: ['Berlin Sans FB', 'Monospace', 'Fantasy', 'Cursive', 'Serif', 'Sans-serif', 'Robot', 'Dancing Script']

    },
    methods: {
        addItem: function() {
            this.todo.push({ label: this.newitem, done: false });
            this.newitem = '';
        },
        markAsDoneOrUndone: function(item) {
            item.done = !item.done;
        },
        deleteItemFromList: function(item) {
            let index = this.todo.indexOf(item)
            this.todo.splice(index, 1);
        },
        newItemValed: function() {
            if (!this.newitem == '') {
                this.addItem();
                this.isEmpty = true;
            } else {
                this.isEmpty = false;
            }
        },
        changeFont: function(font) {
            document.getElementById("todolist").style.fontFamily = font + "";
            document.getElementById("fist").style.fontFamily = font + "";
        },
        changeTheam: function(background, shado) {
            this.mainDiv.backcolor = background;
            this.mainDiv.borderColor = shado;
            this.li.backcolor = shado;
            this.btn.backcolor = shado;
        },
        darkMode: function() {
            if (this.isDark) {
                document.body.style.backgroundColor = "gray";
            } else {
                document.body.style.backgroundColor = "white";
            }
        }

    },


});