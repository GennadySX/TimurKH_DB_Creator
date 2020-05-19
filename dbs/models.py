from django.db import models


# Create your models here.
class DBSModel(models.Model):
    name = models.CharField(verbose_name='Название базы данных (ex. project_s)', max_length=225)
    username = models.CharField(verbose_name='Логин', max_length=225)
    password = models.CharField(verbose_name='Пароль', max_length=120)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'База данных'
        verbose_name_plural = 'Баз данных'