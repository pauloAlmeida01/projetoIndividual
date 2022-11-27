create database hip;
drop database hip;
use hip;

create table usuario (
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table quiz (
id int auto_increment,
fkUsuario int, foreign key (fkUsuario) references usuario(id),
primary key (id, fkUsuario),
dtHora datetime default current_timestamp
);

create table rankQuiz (
id int auto_increment,
pontos int,
fkQuiz int, foreign key (fkQuiz) references quiz(id),
fkUsuario int, foreign key (fkUsuario) references usuario(id),
primary key(id,fkQuiz,fkUsuario)
);




select * from quiz where fkUsuario = 1 and pontos >= 30 order by id DESC limit 2;

select * from usuario join quiz
on usuario.id = fkUsuario
join rankQuiz 
on quiz.id = fkQuiz;

select * from usuario;

select * from quiz;

select * from rankQuiz;
select count(id) from usuario;

select count(id) as Count from usuario;
select count(id) as Count from rankQuiz where pontos = 50 group by pontos order by pontos DESC ;
select count(id) as Count from quiz;

select usuario.nome,rankQuiz.pontos from usuario join quiz on usuario.id = fkUsuario 
join rankQuiz on quiz.id = fkQuiz order by rankQuiz.pontos desc limit 4;


select * from rankQuiz where fkUsuario = 1 and pontos <= 50;

select * from quiz where fkUsuario = 1 order by dtHora DESC limit 2;
