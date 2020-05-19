# Generated by Django 3.0.6 on 2020-05-19 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DBSModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=225, verbose_name='Название базы данных (ex. project_s)')),
                ('path', models.CharField(max_length=225, verbose_name='Логин')),
                ('port', models.CharField(max_length=120, verbose_name='Пароль')),
            ],
            options={
                'verbose_name': 'База данных',
                'verbose_name_plural': 'Баз данных',
            },
        ),
    ]