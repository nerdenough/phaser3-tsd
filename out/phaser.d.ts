declare module 'phaser' {
}

declare class Phaser {
}

declare module Phaser {
    declare class Actions {
        static Angle(items: any[], value: number): any[];

        static Call(items: any[], callback: any, thisArg: any): any[];

        static GetFirst(items: any[], compare: any, index: number): any[];

        static GridAlign(items: any[], options: any): any[];

        static IncAlpha(items: any[], value: number): any[];

        static IncX(items: any[], value: number): any[];

        static IncXY(items: any[], x: number, y: number): any[];

        static IncY(items: any[], value: number): any[];

        static PlaceOnCircle(items: any[], circle: Phaser.Geom.Circle, startAngle: number, endAngle: number): any[];

        static PlaceOnEllipse(items: any[], ellipse: Phaser.Geom.Ellipse, startAngle: number, endAngle: number): any[];

        static PlaceOnLine(items: any[], line: Phaser.Geom.Line): any[];

        static PlaceOnRectangle(items: any[], rect: Phaser.Geom.Rectangle, shift: number): any[];

        static PlaceOnTriangle(items: any[], triangle: Phaser.Geom.Triangle, stepRate: number): any[];

        static PlayAnimation(items: any[], key: string, startFrame: string): any[];

        static RandomCircle(items: any[], circle: Phaser.Geom.Circle): any[];

        static RandomEllipse(items: any[], ellipse: Phaser.Geom.Ellipse): any[];

        static RandomLine(items: any[], line: Phaser.Geom.Line): any[];

        static RandomRectangle(items: any[], rect: Phaser.Geom.Rectangle): any[];

        static RandomTriangle(items: any[], triangle: Phaser.Geom.Triangle): any[];

        static Rotate(items: any[], value: number, step: number): any[];

        static RotateAround(items: any[], point: any, angle: number): any[];

        static RotateAroundDistance(items: any[], point: any, angle: number, distance: number): any[];

        static ScaleX(items: any[], value: number): any[];

        static ScaleXY(items: any[], x: number, y: number): any[];

        static ScaleY(items: any[], value: number): any[];

        static SetAlpha(items: any[], value: number, step: number): any[];

        static SetBlendMode(items: any[], value: number): any[];

        static SetDepth(items: any[], value: number, step: number): any[];

        static SetHitArea(items: any[], hitArea: any, hitAreaCallback: any): any[];

        static SetOrigin(items: any[], x: number, y: number): any[];

        static SetRotation(items: any[], value: number, step: number): any[];

        static SetScale(items: any[], x: number, y: number, stepX: number, stepY: number): any[];

        static SetScaleX(items: any[], value: number, step: number): any[];

        static SetScaleY(items: any[], value: number, step: number): any[];

        static SetTint(items: any[], topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): any[];

        static SetVisible(items: any[], value: boolean): any[];

        static SetX(items: any[], value: number, step: number): any[];

        static SetXY(items: any[], x: number, y: number, stepX: number, stepY: number): any[];

        static SetY(items: any[], value: number, step: number): any[];

        static ShiftPosition(items: any[], x: number, y: number, direction: number, output: Phaser.Math.Vector2): any[];

        static Shuffle(items: any[]): any[];

        static SmootherStep(items: any[], property: string, min: number, max: number, inc: number): any[];

        static SmoothStep(items: any[], property: string, min: number, max: number, inc: number): any[];

        static Spread(items: any[], property: string, min: number, max: number, inc: number): any[];

        static ToggleVisible(items: any[]): any[];

    }

    declare class Animation {
    }

    declare class Cache {
    }

    declare class Cameras {
    }

    declare class Class {
    }

    declare class Create {
    }

    declare class Curves {
    }

    declare class Data {
    }

    declare class Display {
    }

    declare class DOM {
    }

    declare class EventEmitter {
    }

    declare class Game {
    }

    declare class GameObjects {
    }

    declare class Geom {
    }

    declare class Input {
    }

    declare class Loader {
    }

    declare class Math {
    }

    declare class Physics {
    }

    declare class Scene {
    }

    declare class Scenes {
    }

    declare class Sound {
    }

    declare class Structs {
    }

    declare class Textures {
    }

    declare class Tilemaps {
    }

    declare class Time {
    }

    declare class Tweens {
    }

    declare class Utils {
    }

}

