# Generated by Django 3.0.6 on 2020-05-19 15:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dbs', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dbsmodel',
            old_name='port',
            new_name='password',
        ),
        migrations.RenameField(
            model_name='dbsmodel',
            old_name='path',
            new_name='username',
        ),
    ]
