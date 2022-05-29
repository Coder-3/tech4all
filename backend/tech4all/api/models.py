from django.db import models
from model_utils.fields import StatusField
from model_utils import Choices


class Track(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


class Module(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    track = models.ForeignKey(Track, on_delete=models.CASCADE)


class Lesson(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField()
    is_completed = models.BooleanField(default=False)
    is_started = models.BooleanField(default=False)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)

